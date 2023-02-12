import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVacuna } from 'src/app/model/vacuna-interface';
import { VacunaService } from 'src/app/service/vacuna.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFechavac, IFechavac2Form, IFechavac2Send } from 'src/app/model/fechavac-interface';
import { AnimalService } from 'src/app/service/animal.service';
import { FechavacService } from 'src/app/service/fechavac.service';
import { SessionService } from 'src/app/service/session.service';
import { IAnimal } from 'src/app/model/animal-interface';

declare let bootstrap: any;

@Component({
  selector: 'app-fechavac-form-user',
  templateUrl: './fechavac-form-user.component.html',
  styleUrls: ['./fechavac-form-user.component.css']
})
export class FechavacFormUserComponent implements OnInit {
 
 
  id_vacuna: number;
  oVacuna: IVacuna;

  constructor(
    private oRouter: Router,
    private oFechavacService: FechavacService,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService,
    private oAnimalService: AnimalService,
    private oVacunaService: VacunaService,
    private oActivatedRoute: ActivatedRoute

  ) { 
    const id_vacuna =  this.oActivatedRoute.snapshot.params['id_vacuna'];
    if(id_vacuna == null){
        this.id_vacuna = 0;
    }else{
        this.id_vacuna = id_vacuna;
    } }

  getOne() {
    this.oVacunaService.getOne(this.id_vacuna).subscribe({
      next: (data: IVacuna) => {
        this.oVacuna = data;
        console.log(data);
      }
    })
  }
  
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



 

  ngOnInit() {
    this.getOne();
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      fecha_inic: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      id_animal: ["", [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
      vacuna: [this.oVacuna.nombre, [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
    });
    this.updateAnimalDescription(this.id_animal);

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

  
 
  


}
