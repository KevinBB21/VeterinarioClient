import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/service/cita.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

declare let bootstrap: any;
@Component({
  selector: 'app-cita-remove-admin',
  templateUrl: './cita-remove-admin.component.html',
  styleUrls: ['./cita-remove-admin.component.css']
})
export class CitaRemoveAdminComponent implements OnInit {


  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oCitaService: CitaService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oCitaService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "cita " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }
}

