import { Component, OnInit } from '@angular/core';
import { IVacuna } from 'src/app/model/vacuna-interface';
import { IPage } from 'src/app/model/generic';
import { VacunaService } from 'src/app/service/vacuna.service';


@Component({
  selector: 'app-vacuna-plist-admin',
  templateUrl: './vacuna-plist-admin.component.html',
  styleUrls: ['./vacuna-plist-admin.component.css']
})
export class VacunaPlistAdminComponent implements OnInit {
  responseFromServer: IPage<IVacuna>;
  //
  strTermFilter: string = "";
  id_tipoanimalFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oVacunaService: VacunaService
  ) {
    this.getPage();
  }

  ngOnInit() {

  }

  getPage() {
    this.oVacunaService.getVacunaPlist(this.page, this.numberOfElements, this.strTermFilter,this.id_tipoanimalFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IVacuna>) => {
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
    this.getPage();
  }

  setFilterByTipoanimal(id: number): void {
    this.id_tipoanimalFilter = id;
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
