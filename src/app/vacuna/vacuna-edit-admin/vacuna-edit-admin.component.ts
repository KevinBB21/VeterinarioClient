import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VacunaService } from 'src/app/service/vacuna.service';
import { Location } from '@angular/common';
import { IVacuna, IVacuna2Form, IVacuna2Send } from 'src/app/model/vacuna-interface';
import { Tipoanimal } from 'src/app/model/tipoanimal-response-interface';
import { TipoanimalService } from 'src/app/service/tipoanimal.service';

declare let bootstrap: any;

@Component({
  selector: 'app-vacuna-edit-admin',
  templateUrl: './vacuna-edit-admin.component.html',
  styleUrls: ['./vacuna-edit-admin.component.css']
})
export class VacunaEditAdminComponent implements OnInit {

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
  // foreigns
  tipoAnimalDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    protected oLocation: Location,
    private oVacunaService: VacunaService,
    private oFormBuilder: FormBuilder,
    private oTipoanimalService: TipoanimalService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
    
  }

  getOne() {
    this.oVacunaService.getOne(this.id).subscribe({
      next: (data: IVacuna) => {
        this.oVacuna = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
          id_tipoanimal: [data.tipoanimal.id, [Validators.required, Validators.pattern(/^\d{1,2}$/)]]
        });
        this.updateTipoAnimalDescription(this.oVacuna.tipoanimal.id);
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oVacuna2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      tipoanimal: {id: this.oForm.value.id_tipoanimal}
    }
    if (this.oForm.valid) {
      this.oVacunaService.updateOne(this.oVacuna2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "VETERINARIO";
          this.modalContent = "Vacuna " + this.id + " updated";
          this.showModal();
        }
      })
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/vacuna/view', this.id])
    })
    this.myModal.show()
    this.oLocation.back();
  }

 
  openModalFindTipoAnimal(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findTipoanimal"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeTipoAnimalModal(id_tipoanimal: number) {
    this.oForm.controls['id_tipoanimal'].setValue(id_tipoanimal);
    this.updateTipoAnimalDescription(id_tipoanimal);
    this.myModal.hide();
  }

  updateTipoAnimalDescription(id_tipoanimal: number) {
    this.oTipoanimalService.getOne(id_tipoanimal).subscribe({
      next: (data: Tipoanimal) => {
        this.tipoAnimalDescription = data.tipo;
      },
      error: (error: any) => {
        this.tipoAnimalDescription = "tipoAnimal not found";
        this.oForm.controls['id_tipoanimal'].setErrors({'incorrect': true});
      }
    })
  }
}

