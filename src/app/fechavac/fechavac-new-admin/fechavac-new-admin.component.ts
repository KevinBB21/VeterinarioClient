import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFechavac, IFechavac2Form, IFechavac2Send } from 'src/app/model/fechavac-interface';
import { IVacuna } from 'src/app/model/vacuna-interface';
import { AnimalService } from 'src/app/service/animal.service';
import { FechavacService } from 'src/app/service/fechavac.service';
import { VacunaService } from 'src/app/service/vacuna.service';
import { SessionService } from 'src/app/service/session.service';
import { IAnimal } from 'src/app/model/animal-interface';

declare let bootstrap: any;

@Component({
  selector: 'app-fechavac-new-admin',
  templateUrl: './fechavac-new-admin.component.html',
  styleUrls: ['./fechavac-new-admin.component.css']
})
export class FechavacNewAdminComponent implements OnInit {

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
  animalDescription: string = "";
  vacunaDescription: string = "";;
  id_animal:number;
  id_vacuna:number;


  constructor(
    private oRouter: Router,
    private oFechavacService: FechavacService,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService,
    private oAnimalService: AnimalService,
    private oVacunaService: VacunaService,

  ) {
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      fecha_inic: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      id_animal: ["", [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
      id_vacuna: ["", [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
    });
    this.updateAnimalDescription(this.id_animal);
    this.updateVacunaDescription(this.id_vacuna);
  }

  onSubmit() {
    console.log("onSubmit");
    this.oFechavac2Send = {
      id: this.oForm.value.id,
      fecha_inic: this.oForm.value.fecha_inic,
      animal: {id: this.oForm.value.id_animal},
      vacuna: {id: this.oForm.value.id_vacuna},

    }
    if (this.oForm.valid) {
      this.oFechavacService.newOne(this.oFechavac2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "VETERINARIO";
          this.modalContent = "Fechavac " + data + " created";
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
      this.oRouter.navigate(['/admin/Fechavac/view', data])
    })
    this.myModal.show()
  }

  updateAnimalDescription(id_Animal: number) {
    this.oAnimalService.getOne(id_Animal).subscribe({
      next: (data: IAnimal) => {
        this.animalDescription = data.nombre;
      },
      error: (error: any) => {
        this.animalDescription = "Animal not found";
        this.oForm.controls['id_Animal'].setErrors({'incorrect': true});
      }
    })
  }
  closeAnimalModal(id_animal: number) {
    this.oForm.controls['id_animal'].setValue(id_animal);
    this.updateAnimalDescription(id_animal);
    this.myModal.hide();
  }

  openModalFindAnimal(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findAnimal"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  
  updateVacunaDescription(id_vacuna: number) {
    this.oVacunaService.getOne(id_vacuna).subscribe({
      next: (data: IVacuna) => {
        this.vacunaDescription = data.nombre;
      },
      error: (error: any) => {
        this.vacunaDescription = "vacuna not found";
        this.oForm.controls['id_vacuna'].setErrors({'incorrect': true});
      }
    })
  }
  closeVacunaModal(id_vacuna: number) {
    this.oForm.controls['id_vacuna'].setValue(id_vacuna);
    this.updateVacunaDescription(id_vacuna);
    this.myModal.hide();
  }

  openModalFindVacuna(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findVacuna"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }
  


}

