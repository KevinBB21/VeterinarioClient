import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFechavac } from 'src/app/model/fechavac-interface';

@Component({
  selector: 'app-fechavac-view-admin',
  templateUrl: './fechavac-view-admin.component.html',
  styleUrls: ['./fechavac-view-admin.component.css']
})
export class FechavacViewAdminComponent implements OnInit {

  id: number = 0;
  oUser: IFechavac = null;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
  }
}
