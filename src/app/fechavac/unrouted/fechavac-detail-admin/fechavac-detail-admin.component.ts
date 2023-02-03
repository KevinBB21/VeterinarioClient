import { Component, Input, OnInit } from '@angular/core';
import { IFechavac } from 'src/app/model/fechavac-interface';
import { FechavacService } from 'src/app/service/fechavac.service';

@Component({
  selector: 'app-fechavac-detail-admin',
  templateUrl: './fechavac-detail-admin.component.html',
  styleUrls: ['./fechavac-detail-admin.component.css']
})
export class FechavacDetailAdminComponent implements OnInit {

  @Input() id: number;
  oFechavac: IFechavac;

  constructor(
    private oFechavacService: FechavacService
  ) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oFechavacService.getOne(this.id).subscribe({
      next: (data: IFechavac) => {
        this.oFechavac = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }

}

