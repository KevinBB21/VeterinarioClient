import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';
import { IPage} from 'src/app/model/generic';
import { IUser} from 'src/app/model/user-interface';
import { IServicio } from 'src/app/model/servicio-interface';

@Component({
  selector: 'app-servicio-plist-admin',
  templateUrl: './servicio-plist-admin.component.html',
  styleUrls: ['./servicio-plist-admin.component.css']
})
export class ServicioPlistAdminComponent implements OnInit {
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


}
