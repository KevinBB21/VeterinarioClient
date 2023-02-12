import { Component, OnInit } from '@angular/core';
import { IVacuna } from 'src/app/model/vacuna-interface';
import { VacunaService } from 'src/app/service/vacuna.service';

@Component({
  selector: 'app-fechavac-evento-user',
  templateUrl: './fechavac-evento-user.component.html',
  styleUrls: ['./fechavac-evento-user.component.css']
})
export class FechavacEventoUserComponent implements OnInit {

  oVacuna: IVacuna[];


  constructor(
    private oVacunaService: VacunaService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
  for (let index = 0; index < 3 ; index++) {
    this.oVacunaService.getOne(index).subscribe({
      next: (data: IVacuna) => {
        this.oVacuna[index] = data;
        console.log(data);
      }
    })
    
  }
   
  }


}
