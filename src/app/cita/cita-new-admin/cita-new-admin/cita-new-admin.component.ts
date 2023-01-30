import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';
import { IServicio, IServicio2Form, IServicio2Send, ITiposervicio } from 'src/app/model/servicio-interface';
import { ServicioService } from 'src/app/service/servicio.service'
import { TiposervicioService } from 'src/app/service/tiposervicio.service';
import { IAnimal, ICita, ICita2Form, ICita2Send } from 'src/app/model/cita-interface';
import { CitaService } from 'src/app/service/cita.service';
import { UserService } from 'src/app/service/User.service';
import { IUser } from 'src/app/model/user-interface';
import { AnimalService } from 'src/app/service/animal.service';


declare let bootstrap: any;
@Component({
  selector: 'app-cita-new-admin',
  templateUrl: './cita-new-admin.component.html',
  styleUrls: ['./cita-new-admin.component.css']
})
export class CitaNewAdminComponent implements OnInit {

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
  animalDescription: string = "";
  servicioDescription: string = "";
  usuarioDescription: string = "";
  id_animal:number;
  id_servicio:number;
  id_usuario:number;

  constructor(
    private oRouter: Router,
    private oCitaService: CitaService,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService,
    private oAnimalService: AnimalService,
    private oServicioService: ServicioService,
    private oUserService: UserService
  ) {
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      fecha: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      pagado: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(1)]],
      id_animal: ["", [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
      id_servicio: ["", [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
      id_usuario: ["", [Validators.required, Validators.pattern(/^\d{1,2}$/)]]
    });
    this.updateAnimalDescription(this.id_animal);
    this.updateServicioDescription(this.id_servicio);
    this.updateUsuarioDescription(this.id_usuario);
  }

  onSubmit() {
    console.log("onSubmit");
    this.oCita2Send = {
      id: this.oForm.value.id,
      fecha: this.oForm.value.fecha,
      pagado: this.oForm.value.pagado,
      animal: {id: this.oForm.value.id_animal},
      servicio: {id: this.oForm.value.id_servicio},
      usuario: {id: this.oForm.value.id_usuario}
    }
    if (this.oForm.valid) {
      this.oCitaService.newOne(this.oCita2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "VETERINARIO";
          this.modalContent = "Cita " + data + " created";
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
      this.oRouter.navigate(['/admin/servicio/view', data])
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

  
  updateServicioDescription(id_Servicio: number) {
    this.oServicioService.getOne(id_Servicio).subscribe({
      next: (data: IServicio) => {
        this.servicioDescription = data.nombre;
      },
      error: (error: any) => {
        this.servicioDescription = "Servicio not found";
        this.oForm.controls['id_Servicio'].setErrors({'incorrect': true});
      }
    })
  }
  closeServicioModal(id_Servicio: number) {
    this.oForm.controls['id_Servicio'].setValue(id_Servicio);
    this.updateServicioDescription(id_Servicio);
    this.myModal.hide();
  }

  openModalFindServicio(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findServicio"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  
  updateUsuarioDescription(id_Usuario: number) {
    this.oUserService.getOne(id_Usuario).subscribe({
      next: (data: IUser) => {
        this.usuarioDescription = data.name;
      },
      error: (error: any) => {
        this.usuarioDescription = "Usuario not found";
        this.oForm.controls['id_Usuario'].setErrors({'incorrect': true});
      }
    })
  }
  closeUsuarioModal(id_Usuario: number) {
    this.oForm.controls['id_Usuario'].setValue(id_Usuario);
    this.updateUsuarioDescription(id_Usuario);
    this.myModal.hide();
  }

  openModalFindUsuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findUsuario"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

}

