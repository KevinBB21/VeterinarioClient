import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic';
import { ITiposervicio } from 'src/app/model/servicio-interface';
import { SessionService } from 'src/app/service/session.service';
import { TiposervicioService } from 'src/app/service/tiposervicio.service'; 
@Component({
  selector: 'app-tiposervicio-finder-admin',
  templateUrl: './tiposervicio-finder-admin.component.html',
  styleUrls: ['./tiposervicio-finder-admin.component.css']
})
export class TiposervicioFinderAdminComponent implements OnInit {


  @Output() closeEvent = new EventEmitter<number>();

  private pListContent!: ITiposervicio[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  id_Tiposervicio: number = 0;


  constructor(
    private oTiposervicioService: TiposervicioService,
    private oSessionService: SessionService
  ) {}

  ngOnInit(): void {
      localStorage.getItem;
    this.getPage();
  }

 
  getPage() {
    this.oTiposervicioService.getTiposervicioPlist(this.numberPage, this.pageRegister)
      .subscribe({
        next: (resp: IPage<ITiposervicio>) => {
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

  getPlistContent(): ITiposervicio[] {
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

  filterByTiposervicio(id: number): void {
    this.id_Tiposervicio = id;
    this.numberPage = 0;
    this.getPage();
  }

  selectionTiposervicio(id: number): void {
    this.closeEvent.emit(id);
  }

}
