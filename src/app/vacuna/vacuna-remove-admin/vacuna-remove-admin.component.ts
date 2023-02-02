import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacunaService } from 'src/app/service/vacuna.service';
import { Location } from '@angular/common';

declare let bootstrap: any;

@Component({
  selector: 'app-vacuna-remove-admin',
  templateUrl: './vacuna-remove-admin.component.html',
  styleUrls: ['./vacuna-remove-admin.component.css']
})
export class VacunaRemoveAdminComponent implements OnInit {


  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oVacunaService: VacunaService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oVacunaService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Vacuna " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }
}

