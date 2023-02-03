import { Component, OnInit } from '@angular/core';
import { FechavacService } from 'src/app/service/fechavac.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

declare let bootstrap: any;
@Component({
  selector: 'app-fechavac-remove-admin',
  templateUrl: './fechavac-remove-admin.component.html',
  styleUrls: ['./fechavac-remove-admin.component.css']
})
export class FechavacRemoveAdminComponent implements OnInit {


  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oFechavacService: FechavacService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oFechavacService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "fechavac " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }
}

