import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';
import { IServicio, IServicio2Form, IServicio2Send, ITiposervicio } from 'src/app/model/servicio-interface';
import { ServicioService } from 'src/app/service/servicio.service'
import { TiposervicioService } from 'src/app/service/tiposervicio.service';


declare let bootstrap: any;
@Component({
  selector: 'app-servicio-new-admin',
  templateUrl: './servicio-new-admin.component.html',
  styleUrls: ['./servicio-new-admin.component.css']
})
export class ServicioNewAdminComponent implements OnInit {

  id: number = 0;
  oUser: IServicio = null;
  oUser2Form: IServicio2Form = null;
  oUser2Send: IServicio2Send = null;
  oForm: FormGroup<IServicio2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  TiposervicioDescription: string = "";
  id_tiposervicio:number;

  constructor(
    private oRouter: Router,
    private oServicioService: ServicioService,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService,
    private oTiposervicioService: TiposervicioService
  ) {
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      precio: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(10)]],
      imagen: ['', [Validators.required, Validators.minLength(0), Validators.maxLength(1)]],
      descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      id_tiposervicio: ["", [Validators.required, Validators.pattern(/^\d{1,2}$/)]]
    });
    this.updateTiposervicioDescription(this.id_tiposervicio);
  }

  onSubmit() {
    console.log("onSubmit");
    this.oUser2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      precio: this.oForm.value.precio,
      imagen: this.oForm.value.imagen,
      descripcion: this.oForm.value.descripcion,
      tiposervicio: {id: this.oForm.value.id_tiposervicio}
    }
    if (this.oForm.valid) {
      this.oServicioService.newOne(this.oUser2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "VETERINARIO";
          this.modalContent = "Servicio " + data + " created";
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

  updateTiposervicioDescription(id_tiposervicio: number) {
    this.oTiposervicioService.getOne(id_tiposervicio).subscribe({
      next: (data: ITiposervicio) => {
        this.TiposervicioDescription = data.name;
      },
      error: (error: any) => {
        this.TiposervicioDescription = "Tiposervicio not found";
        this.oForm.controls['id_tiposervicio'].setErrors({'incorrect': true});
      }
    })
  }
  closeTiposervicioModal(id_tiposervicio: number) {
    this.oForm.controls['id_tiposervicio'].setValue(id_tiposervicio);
    this.updateTiposervicioDescription(id_tiposervicio);
    this.myModal.hide();
  }

  openModalFindTiposervicio(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findTiposervicio"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

}

