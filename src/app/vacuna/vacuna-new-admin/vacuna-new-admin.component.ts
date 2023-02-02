import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';
import { IVacuna, IVacuna2Form, IVacuna2Send ,ITipoanimal } from 'src/app/model/vacuna-interface';
import { VacunaService } from 'src/app/service/vacuna.service'
import { TipoanimalService } from 'src/app/service/tipoanimal.service';

declare let bootstrap: any;

@Component({
  selector: 'app-vacuna-new-admin',
  templateUrl: './vacuna-new-admin.component.html',
  styleUrls: ['./vacuna-new-admin.component.css']
})
export class VacunaNewAdminComponent implements OnInit {

  id: number = 0;
  oVacuna: IVacuna = null;
  oVacuna2Form: IVacuna2Form = null;
  oVacuna2Send: IVacuna2Send = null;
  oForm: FormGroup<IVacuna2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  TipoAnimalDescription: string = "";
  id_tipoAnimal:number;

  constructor(
    private oRouter: Router,
    private oVacunaService: VacunaService,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService,
    private oTipoanimalService: TipoanimalService
  ) {
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      id_tipoanimal: ["", [Validators.required, Validators.pattern(/^\d{1,2}$/)]]
    });
    this.updateTipoAnimalDescription(this.id_tipoAnimal);
  }

  onSubmit() {
    console.log("onSubmit");
    this.oVacuna2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      tipoanimal: {id: this.oForm.value.id_tipoanimal}
    }
    if (this.oForm.valid) {
      this.oVacunaService.newOne(this.oVacuna2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "VETERINARIO";
          this.modalContent = "Animal " + data + " created";
          this.showModal(data);
        }
      })
    }

  }



  showModal = (data) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/vacuna/view', data])
    })
    this.myModal.show()
  }

  updateTipoAnimalDescription(id_tipoAnimal: number) {
    this.oTipoanimalService.getOne(id_tipoAnimal).subscribe({
      next: (data: ITipoanimal) => {
        this.TipoAnimalDescription = data.tipo;
      },
      error: (error: any) => {
        this.TipoAnimalDescription = "TipoAnimal not found";
        this.oForm.controls['id_tipoanimal'].setErrors({'incorrect': true});
      }
    })
  }
  closeTipoAnimalModal(id_tipoAnimal: number) {
    this.oForm.controls['id_tipoanimal'].setValue(id_tipoAnimal);
    this.updateTipoAnimalDescription(id_tipoAnimal);
    this.myModal.hide();
  }

  openModalFindTipoAnimal(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findTipoAnimal"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

}

