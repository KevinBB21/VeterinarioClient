import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/service/cita.service';
import { Location } from '@angular/common';
import { IAnimal, ICita, ICita2Form, ICita2Send } from 'src/app/model/cita-interface';
import { UserService } from 'src/app/service/User.service';
import { AnimalService } from 'src/app/service/animal.service';
import { IServicio } from 'src/app/model/servicio-interface';
import { ServicioService } from 'src/app/service/servicio.service';
import { IUser } from 'src/app/model/user-interface';






declare let bootstrap: any;
@Component({
  selector: 'app-cita-edit-admin',
  templateUrl: './cita-edit-admin.component.html',
  styleUrls: ['./cita-edit-admin.component.css']
})
export class CitaEditAdminComponent implements OnInit {

  id: number = 0;
  oCita: ICita = null;
  oCita2Form: ICita2Form = null;
  oCita2Send: ICita2Send = null;
  oForm: FormGroup<ICita2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns
  CitaDescription: string = "";
  AnimalDescription: string = "";
  ServicioDescription: string = "";
  UserDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    protected oLocation: Location,
    private oFormBuilder: FormBuilder,
    private oAnimalService: AnimalService,
    private oServicioService: ServicioService,
    private oCitaService: CitaService,
    private oUserService: UserService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
    
  }

  getOne() {
    this.oCitaService.getOne(this.id).subscribe({
      next: (data: ICita) => {
        this.oCita = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          fecha: [data.fecha, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
          pagado: [data.pagado, [Validators.required, Validators.minLength(0), Validators.maxLength(15)]],
          id_animal: [data.animal.id, [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
          id_servicio: [data.servicio.id, [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
          id_user: [data.user.id, [Validators.required, Validators.pattern(/^\d{1,2}$/)]]
        });
        this.updateAnimalDescription(this.oCita.animal.id);
        this.updateServicioDescription(this.oCita.servicio.id);
        this.updateUserDescription(this.oCita.user.id);
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oCita2Send = {
      id: this.oForm.value.id,
      fecha: this.oForm.value.fecha,
      pagado: this.oForm.value.pagado,
      animal: { id: this.oForm.value.id_animal },
      servicio: { id: this.oForm.value.id_servicio },
      user: { id: this.oForm.value.id_user }
    }
    if (this.oForm.valid) {
      this.oCitaService.updateOne(this.oCita2Send).subscribe({ //???? mirar 
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "VETERINARIO";
          this.modalContent = "Cita " + this.id + " updated";
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
      this.oRouter.navigate(['/admin/cita/view', this.id])
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

  openModalFindServicio(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findServicio"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeServicioModal(id_Servicio: number) {
    this.oForm.controls['id_servicio'].setValue(id_Servicio);
    this.updateServicioDescription(id_Servicio);
    this.myModal.hide();
  }

  updateServicioDescription(id_Servicio: number) {
    this.oServicioService.getOne(id_Servicio).subscribe({
      next: (data: IServicio) => {
        this.ServicioDescription = data.nombre;
      },
      error: (error: any) => {
        this.ServicioDescription = "Servicio not found";
        this.oForm.controls['id_servicio'].setErrors({'incorrect': true});
      }
    })
  }

  openModalFindUser(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findUser"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeUserModal(id_user: number) {
    this.oForm.controls['id_user'].setValue(id_user);
    this.updateUserDescription(id_user);
    this.myModal.hide();
  }

  updateUserDescription(id_user: number) {
    this.oUserService.getOne(id_user).subscribe({
      next: (data: IUser) => {
        this.UserDescription = data.name;
      },
      error: (error: any) => {
        this.UserDescription = "User not found";
        this.oForm.controls['id_user'].setErrors({'incorrect': true});
      }
    })
  }
  
}

