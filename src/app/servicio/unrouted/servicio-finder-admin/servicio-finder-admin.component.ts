import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic';
import { IServicio } from 'src/app/model/servicio-interface';
import { ServicioService } from 'src/app/service/servicio.service';
import { SessionService } from 'src/app/service/session.service';
 

@Component({
  selector: 'app-servicio-finder-admin',
  templateUrl: './servicio-finder-admin.component.html',
  styleUrls: ['./servicio-finder-admin.component.css']
})
export class ServicioFinderAdminComponent implements OnInit {
 
 
  @Output() closeEvent = new EventEmitter<number>();


  responseFromServer: IPage<IServicio>;
  //
  strTermFilter: string = "";
  id_tiposervicioFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oServicioService: ServicioService
  ) {
    this.getPage();
  }

  ngOnInit() {

  }

  getPage() {
    this.oServicioService.getServicioPlist(this.page, this.numberOfElements, this.strTermFilter,this.id_tiposervicioFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IServicio>) => {
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

  setFilterByTiposervicio(id: number): void {
    this.id_tiposervicioFilter = id;
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


  selectionServicio(id: number): void {
    this.closeEvent.emit(id);
  }

}

