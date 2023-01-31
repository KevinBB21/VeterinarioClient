import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from 'src/app/service/animal.service'; 
import { Location } from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-animal-remove-admin',
  templateUrl: './animal-remove-admin.component.html',
  styleUrls: ['./animal-remove-admin.component.css']
})
export class AnimalRemoveAdminComponent implements OnInit {

 
  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oAnimalService: AnimalService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oAnimalService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Animal " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }
}
