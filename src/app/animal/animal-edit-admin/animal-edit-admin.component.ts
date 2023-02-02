import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from 'src/app/service/animal.service';
import { Location } from '@angular/common';
import { IAnimal, IAnimal2Form, IAnimal2Send } from 'src/app/model/animal-interface';
import { Tipoanimal } from 'src/app/model/tipoanimal-response-interface';
import { TipoanimalService } from 'src/app/service/tipoanimal.service';


declare let bootstrap: any;
@Component({
  selector: 'app-animal-edit-admin',
  templateUrl: './animal-edit-admin.component.html',
  styleUrls: ['./animal-edit-admin.component.css']
})
export class AnimalEditAdminComponent implements OnInit {

  id: number = 0;
  oAnimal: IAnimal = null;
  oAnimal2Form: IAnimal2Form = null;
  oAnimal2Send: IAnimal2Send = null;
  oForm: FormGroup<IAnimal2Form>;
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
    private oAnimalService: AnimalService,
    private oFormBuilder: FormBuilder,
    private oTipoanimalService: TipoanimalService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
    
  }

  getOne() {
    this.oAnimalService.getOne(this.id).subscribe({
      next: (data: IAnimal) => {
        this.oAnimal = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
          color: [data.color, [Validators.required, Validators.minLength(0), Validators.maxLength(10)]],
         raza: [data.raza, [Validators.required, Validators.minLength(0), Validators.maxLength(1)]],
         fecha_nac: [data.fecha_nac, [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
         vacunado: [data.vacunado, [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
         peso: [data.peso, [Validators.required, Validators.minLength(3), Validators.maxLength(150)]], 
          id_tipoanimal: [data.tipoanimal.id, [Validators.required, Validators.pattern(/^\d{1,2}$/)]]
        });
        this.updateTipoAnimalDescription(this.oAnimal.tipoanimal.id);
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oAnimal2Send = {
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
      this.oAnimalService.updateOne(this.oAnimal2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "VETERINARIO";
          this.modalContent = "Animal " + this.id + " updated";
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
      this.oRouter.navigate(['/admin/animal/view', this.id])
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

