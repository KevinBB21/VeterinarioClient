import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVacuna } from 'src/app/model/vacuna-interface';

@Component({
  selector: 'app-vacuna-view-admin',
  templateUrl: './vacuna-view-admin.component.html',
  styleUrls: ['./vacuna-view-admin.component.css']
})
export class VacunaViewAdminComponent implements OnInit {

  id: number = 0;
  oUser: IVacuna = null;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
  }
}
