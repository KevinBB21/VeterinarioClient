import { Component, Input, OnInit } from '@angular/core';
import { IVacuna } from 'src/app/model/vacuna-interface';
import { VacunaService } from 'src/app/service/vacuna.service';

@Component({
  selector: 'app-vacuna-detail-admin',
  templateUrl: './vacuna-detail-admin.component.html',
  styleUrls: ['./vacuna-detail-admin.component.css']
})
export class VacunaDetailAdminComponent implements OnInit {

  @Input() id: number;
  oVacuna: IVacuna;

  constructor(
    private oVacunaService: VacunaService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oVacunaService.getOne(this.id).subscribe({
      next: (data: IVacuna) => {
        this.oVacuna = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }

}

