import { Component, Input, OnInit } from '@angular/core';
import { ICita } from 'src/app/model/cita-interface';
import { CitaService } from 'src/app/service/cita.service';

@Component({
  selector: 'app-cita-detail-admin',
  templateUrl: './cita-detail-admin.component.html',
  styleUrls: ['./cita-detail-admin.component.css']
})
export class CitaDetailAdminComponent implements OnInit {

  @Input() id: number;
  oCita: ICita;

  constructor(
    private oCitaService: CitaService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oCitaService.getOne(this.id).subscribe({
      next: (data: ICita) => {
        this.oCita = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }

}

