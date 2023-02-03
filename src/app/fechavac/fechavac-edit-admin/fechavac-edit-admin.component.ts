import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IAnimal } from 'src/app/model/cita-interface';
import { IFechavac, IFechavac2Form, IFechavac2Send } from 'src/app/model/fechavac-interface';
import { IVacuna } from 'src/app/model/vacuna-interface';
import { UserService } from 'src/app/service/User.service';
import { AnimalService } from 'src/app/service/animal.service';
import { FechavacService } from 'src/app/service/fechavac.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { VacunaService } from 'src/app/service/vacuna.service';
import { Location } from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-fechavac-edit-admin',
  templateUrl: './fechavac-edit-admin.component.html',
  styleUrls: ['./fechavac-edit-admin.component.css']
})
export class FechavacEditAdminComponent implements OnInit {

  id: number = 0;
  oFechavac: IFechavac = null;
  oFechavac2Form: IFechavac2Form = null;
  oFechavac2Send: IFechavac2Send = null;
  oForm: FormGroup<IFechavac2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns
  FechavacDescription: string = "";
  AnimalDescription: string = "";
  VacunaDescription: string = "";


  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    protected oLocation: Location,
    private oFormBuilder: FormBuilder,
    private oAnimalService: AnimalService,
    private oVacunaService: VacunaService,
    private oFechavacService: FechavacService

  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
    
  }

  getOne() {
    this.oFechavacService.getOne(this.id).subscribe({
      next: (data: IFechavac) => {
        this.oFechavac = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          fecha_inic: [data.fecha_inic, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
          id_animal: [data.animal.id, [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
          id_vacuna: [data.vacuna.id, [Validators.required, Validators.pattern(/^\d{1,2}$/)]]
    
        });
        this.updateAnimalDescription(this.oFechavac.animal.id);
        this.updateVacunaDescription(this.oFechavac.vacuna.id);

      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oFechavac2Send = {
      id: this.oForm.value.id,
      fecha_inic: this.oForm.value.fecha_inic,
      animal: { id: this.oForm.value.id_animal },
      vacuna: { id: this.oForm.value.id_vacuna },
    }
    if (this.oForm.valid) {
      this.oFechavacService.updateOne(this.oFechavac2Send).subscribe({ //???? mirar 
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "VETERINARIO";
          this.modalContent = "Fechavac " + this.id + " updated";
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
      this.oRouter.navigate(['/admin/Fechavac/view', this.id])
    })
    this.myModal.show()
    this.oLocation.back();
  }

 
  openModalFindAnimal(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findAnimal"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeAnimalModal(id_Animal: number) {
    this.oForm.controls['id_animal'].setValue(id_Animal);
    this.updateAnimalDescription(id_Animal);
    this.myModal.hide();
  }

  updateAnimalDescription(id_Animal: number) {
    this.oAnimalService.getOne(id_Animal).subscribe({
      next: (data: IAnimal) => {
        this.AnimalDescription = data.nombre;
      },
      error: (error: any) => {
        this.AnimalDescription = "Animal not found";
        this.oForm.controls['id_animal'].setErrors({'incorrect': true});
      }
    })
  }

  openModalFindVacuna(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findVacuna"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeVacunaModal(id_Vacuna: number) {
    this.oForm.controls['id_vacuna'].setValue(id_Vacuna);
    this.updateVacunaDescription(id_Vacuna);
    this.myModal.hide();
  }

  updateVacunaDescription(id_Vacuna: number) {
    this.oVacunaService.getOne(id_Vacuna).subscribe({
      next: (data: IVacuna) => {
        this.VacunaDescription = data.nombre;
      },
      error: (error: any) => {
        this.VacunaDescription = "Vacuna not found";
        this.oForm.controls['id_vacuna'].setErrors({'incorrect': true});
      }
    })
  }


  
}

