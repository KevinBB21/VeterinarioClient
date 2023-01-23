import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service'; 
import { Location } from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-servicio-remove-admin',
  templateUrl: './servicio-remove-admin.component.html',
  styleUrls: ['./servicio-remove-admin.component.css']
})
export class ServicioRemoveAdminComponent implements OnInit {


  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oServicioService: ServicioService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oServicioService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "servicio " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }
}
