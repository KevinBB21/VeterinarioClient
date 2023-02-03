import { Component, OnInit } from '@angular/core';
import { IFechavac } from 'src/app/model/fechavac-interface';
import { IPage } from 'src/app/model/generic';
import { FechavacService } from 'src/app/service/fechavac.service';

@Component({
  selector: 'app-fechavac-plist-admin',
  templateUrl: './fechavac-plist-admin.component.html',
  styleUrls: ['./fechavac-plist-admin.component.css']
})
export class FechavacPlistAdminComponent implements OnInit {

  responseFromServer: IPage<IFechavac>;
  //
  strTermFilter: string = "";
  id_animalFilter: number = 0;
  id_vacunaFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oFechavacService: FechavacService
  ) {
  }
  
  ngOnInit() {
    this.getPage();

  }

  getPage() {
    this.oFechavacService.getFechavacPlist(this.page, this.numberOfElements, this.strTermFilter,this.id_vacunaFilter,this.id_animalFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IFechavac>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },
      
      })
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.setPage(1);
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.setPage(1);
    this.getPage();
  }

  setFilterByAnimal(id: number): void {
    this.id_animalFilter = id;
    this.setPage(1);
    this.getPage();
  }

  setFilterByVacuna(id: number): void {
    this.id_vacunaFilter = id;
    this.setPage(1);
    this.getPage();
  }


  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }


}