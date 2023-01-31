import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic';
import { ITipoanimal } from 'src/app/model/animal-interface';
import { SessionService } from 'src/app/service/session.service';
import { TipoanimalService } from 'src/app/service/tipoanimal.service'; 
@Component({
  selector: 'app-tipoanimal-finder-admin',
  templateUrl: './tipoanimal-finder-admin.component.html',
  styleUrls: ['./tipoanimal-finder-admin.component.css']
})
export class TipoanimalFinderAdminComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();

  private pListContent!: ITipoanimal[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  id_Tipoanimal: number = 0;


  constructor(
    private oTipoanimalService: TipoanimalService,
    private oSessionService: SessionService
  ) {}

  ngOnInit(): void {
      localStorage.getItem;
    this.getPage();
  }

 
  getPage() {
    this.oTipoanimalService.getTipoanimalPlist(this.numberPage, this.pageRegister)
      .subscribe({
        next: (resp: IPage<ITipoanimal>) => {
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

  getPlistContent(): ITipoanimal[] {
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

  filterByTipoanimal(id: number): void {
    this.id_Tipoanimal = id;
    this.numberPage = 0;
    this.getPage();
  }

  selectionTipoanimal(id: number): void {
    this.closeEvent.emit(id);
  }

}
