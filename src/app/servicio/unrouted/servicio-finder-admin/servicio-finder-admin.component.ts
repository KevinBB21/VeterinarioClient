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

  private pListContent!: IServicio[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  private OrderFilter: string;
  private SortFilter: string;
  id_Servicio: number = 0;


  constructor(
    private oServicioService: ServicioService,
    private oSessionService: SessionService
  ) {}

  ngOnInit(): void {
      localStorage.getItem;
    this.getPage();
  }

 
  getPage() {
    this.oServicioService.getServicioPlist(this.numberPage, this.pageRegister , this.termino ,this.id_Servicio , this.OrderFilter , this.SortFilter)
      .subscribe({
        next: (resp: IPage<IServicio>) => {
          this.pListContent = resp.content;
          this.pagesCount = resp.totalPages;
          
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
    }

  getPageNumber(): number {
    return this.numberPage;
  }

  getPlistContent(): IServicio[] {
    return this.pListContent;
  }

  getpagesCount(): number {
    return this.pagesCount;
  }

  setPage(e: number) {
    this.numberPage = e - 1;
    this.getPage();
  }

  getPageRegister(): number {
    return this.pageRegister;
  }

  setRpp(registerPage: number) {
    this.pageRegister = registerPage;
    this.getPage();
  }

  setFilter(termino: string): void {
    this.termino = termino;
    this.numberPage = 0;
    this.getPage();
  }

  filterByServicio(id: number): void {
    this.id_Servicio = id;
    this.numberPage = 0;
    this.getPage();
  }

  selectionServicio(id: number): void {
    this.closeEvent.emit(id);
  }

}

