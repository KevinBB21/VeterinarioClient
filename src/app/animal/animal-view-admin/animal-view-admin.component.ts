import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/model/animal-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-view-admin',
  templateUrl: './animal-view-admin.component.html',
  styleUrls: ['./animal-view-admin.component.css']
})
export class AnimalViewAdminComponent implements OnInit {

  id: number = 0;
  oUser: IAnimal = null;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    
  }
}
