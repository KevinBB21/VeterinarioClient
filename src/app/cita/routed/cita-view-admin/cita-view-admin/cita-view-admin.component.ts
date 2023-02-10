import { Component, OnInit } from '@angular/core';
import { ICita } from 'src/app/model/cita-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cita-view-admin',
  templateUrl: './cita-view-admin.component.html',
  styleUrls: ['./cita-view-admin.component.css']
})
export class CitaViewAdminComponent implements OnInit {

  id: number = 0;
  oUser: ICita = null;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
  }
}
