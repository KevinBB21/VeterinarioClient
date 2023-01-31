import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';
import { IAnimal, IAnimal2Form, IAnimal2Send, ITipoanimal } from 'src/app/model/animal-interface';
import { AnimalService } from 'src/app/service/animal.service'
import { TipoanimalService } from 'src/app/service/tipoanimal.service';


declare let bootstrap: any;
@Component({
  selector: 'app-animal-new-admin',
  templateUrl: './animal-new-admin.component.html',
  styleUrls: ['./animal-new-admin.component.css']
})
export class AnimalNewAdminComponent implements OnInit {

  id: number = 0;
  oUser: IAnimal = null;
  oUser2Form: IAnimal2Form = null;
  oUser2Send: IAnimal2Send = null;
  oForm: FormGroup<IAnimal2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  TipoAnimalDescription: string = "";
  id_tipoAnimal:number;

  constructor(
    private oRouter: Router,
    private oAnimalService: AnimalService,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService,
    private oTipoanimalService: TipoanimalService
  ) {
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      color: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(10)]],
      raza: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(1)]],
      fecha_nac: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      vacunado: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      peso: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]], 
      id_tipoAnimal: ["", [Validators.required, Validators.pattern(/^\d{1,2}$/)]]
    });
    this.updateTipoAnimalDescription(this.id_tipoAnimal);
  }

  onSubmit() {
    console.log("onSubmit");
    this.oUser2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      color: this.oForm.value.color,
      raza: this.oForm.value.raza,
      fecha_nac: this.oForm.value.fecha_nac,
      vacunado: this.oForm.value.vacunado,
      peso: this.oForm.value.peso,
      tipoanimal: {id: this.oForm.value.id_tipoanimal}
    }
    if (this.oForm.valid) {
      this.oAnimalService.newOne(this.oUser2Send).subscribe({
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
      this.oRouter.navigate(['/admin/Animal/view', data])
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
        this.oForm.controls['id_tipoAnimal'].setErrors({'incorrect': true});
      }
    })
  }
  closeTipoAnimalModal(id_tipoAnimal: number) {
    this.oForm.controls['id_tipoAnimal'].setValue(id_tipoAnimal);
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

