import { Component, Input, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/model/cita-interface';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-animal-detail-admin',
  templateUrl: './animal-detail-admin.component.html',
  styleUrls: ['./animal-detail-admin.component.css']
})
export class AnimalDetailAdminComponent implements OnInit {

  @Input() id: number;
  oAnimal: IAnimal;

  constructor(
    private oAnimalService: AnimalService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oAnimalService.getOne(this.id).subscribe({
      next: (data: IAnimal) => {
        this.oAnimal = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }

}

