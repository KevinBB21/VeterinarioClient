import { Component, OnInit } from '@angular/core';
import { IServicio } from 'src/app/model/servicio-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicio-view-admin',
  templateUrl: './servicio-view-admin.component.html',
  styleUrls: ['./servicio-view-admin.component.css']
})
export class ServicioViewAdminComponent implements OnInit {

  id: number = 0;
  oUser: IServicio = null;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
  }
}
