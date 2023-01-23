import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';
import { Location } from '@angular/common';
import { IServicio, IServicio2Form, IServicio2Send } from 'src/app/model/servicio-interface';
import { Tiposervicio } from 'src/app/model/tiposervicio-response-interface';
import { TiposervicioService } from 'src/app/service/tiposervicio.service';


declare let bootstrap: any;
@Component({
  selector: 'app-servicio-edit-admin',
  templateUrl: './servicio-edit-admin.component.html',
  styleUrls: ['./servicio-edit-admin.component.css']
})
export class ServicioEditAdminComponent implements OnInit {

  id: number = 0;
  oServicio: IServicio = null;
  oServicio2Form: IServicio2Form = null;
  oServicio2Send: IServicio2Send = null;
  oForm: FormGroup<IServicio2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns
  tiposervicioDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    protected oLocation: Location,
    private oServicioService: ServicioService,
    private oFormBuilder: FormBuilder,
    private oTiposervicioService: TiposervicioService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
    
  }

  getOne() {
    this.oServicioService.getOne(this.id).subscribe({
      next: (data: IServicio) => {
        this.oServicio = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
          precio: [data.precio, [Validators.required, Validators.minLength(0), Validators.maxLength(15)]],
          imagen: [data.imagen, [Validators.required, Validators.minLength(0), Validators.maxLength(1)]],
          descripcion: [data.descripcion, [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
          id_tiposervicio: [data.tiposervicio.id, [Validators.required, Validators.pattern(/^\d{1,2}$/)]]
        });
        this.updateTiposervicioDescription(this.oServicio.tiposervicio.id);
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oServicio2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      precio: this.oForm.value.precio,
      imagen: this.oForm.value.imagen,
      descripcion: this.oForm.value.descripcion,
      tiposervicio: { id: this.oForm.value.id_tiposervicio }
    }
    if (this.oForm.valid) {
      this.oServicioService.updateOne(this.oServicio2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "VETERINARIO";
          this.modalContent = "Servicio " + this.id + " updated";
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
      this.oRouter.navigate(['/admin/servicio/view', this.id])
    })
    this.myModal.show()
    this.oLocation.back();
  }

 
  openModalFindTiposervicio(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findTiposervicio"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeTiposervicioModal(id_tiposervicio: number) {
    this.oForm.controls['id_tiposervicio'].setValue(id_tiposervicio);
    this.updateTiposervicioDescription(id_tiposervicio);
    this.myModal.hide();
  }

  updateTiposervicioDescription(id_tiposervicio: number) {
    this.oTiposervicioService.getOne(id_tiposervicio).subscribe({
      next: (data: Tiposervicio) => {
        this.tiposervicioDescription = data.name;
      },
      error: (error: any) => {
        this.tiposervicioDescription = "tiposervicio not found";
        this.oForm.controls['id_tiposervicio'].setErrors({'incorrect': true});
      }
    })
  }
}

