import { Component, OnInit } from '@angular/core';
import { IVacuna } from 'src/app/model/vacuna-interface';
import { VacunaService } from 'src/app/service/vacuna.service';

@Component({
  selector: 'app-fechavac-evento-user',
  templateUrl: './fechavac-evento-user.component.html',
  styleUrls: ['./fechavac-evento-user.component.css']
})
export class FechavacEventoUserComponent implements OnInit {

  
  oVacuna: IVacuna;
  oVacuna2: IVacuna;
  oVacuna3: IVacuna;


  constructor(
    private oVacunaService: VacunaService,
  ) { }

  ngOnInit() {
    this.getOne();
    this.get2();
    this.get3();
    
  }

 

  getOne() {
 
    this.oVacunaService.getOne(1).subscribe({
      next: (data: IVacuna) => {
        this.oVacuna = data; 
      }
    })
  }

  get2() {
 
    this.oVacunaService.getOne(2).subscribe({
      next: (data: IVacuna) => {
        this.oVacuna2 = data; 
      }
    })
  }

  get3() {
 
    this.oVacunaService.getOne(3).subscribe({
      next: (data: IVacuna) => {
        this.oVacuna3 = data; 
      }
    })
  }

}
