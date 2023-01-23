import { Component, Input, OnInit } from '@angular/core';
import { IServicio } from 'src/app/model/servicio-interface';
import { ServicioService } from 'src/app/service/servicio.service';


@Component({
  selector: 'app-servicio-detail-admin',
  templateUrl: './servicio-detail-admin.component.html',
  styleUrls: ['./servicio-detail-admin.component.css']
})
export class ServicioDetailAdminComponent implements OnInit {

  @Input() id: number;
  oServicio: IServicio;

  constructor(
    private oServicioService: ServicioService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oServicioService.getOne(this.id).subscribe({
      next: (data: IServicio) => {
        this.oServicio = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }

}
