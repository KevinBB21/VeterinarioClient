import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic';
import { IUsertype } from 'src/app/model/user-interface';
import { SessionService } from 'src/app/service/session.service';
import { UsertypeService } from 'src/app/service/usertype.service';


@Component({
  selector: 'app-usertype-finder-admin-unrouted',
  templateUrl: './usertype-finder-admin-unrouted.component.html',
  styleUrls: ['./usertype-finder-admin-unrouted.component.css']
})
export class UsertypeFinderAdminUnroutedComponent implements OnInit {

    @Output() closeEvent = new EventEmitter<number>();

    private pListContent!: IUsertype[];
    private pagesCount!: number;
    private numberPage: number = 0;
    private pageRegister: number = 5;
    private termino: string = "";
    id_Usertype: number = 0;


    constructor(
      private oUsertypeService: UsertypeService,
      private oSessionService: SessionService
    ) {}

    ngOnInit(): void {
        localStorage.getItem;
      this.getPage();
    }

    getPage() {
      this.oUsertypeService.getUserstypePlist(this.numberPage, this.pageRegister)
        .subscribe({
          next: (resp: IPage<IUsertype>) => {
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

    getPlistContent(): IUsertype[] {
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

    filterByUsertype(id: number): void {
      this.id_Usertype = id;
      this.numberPage = 0;
      this.getPage();
    }

    selectionUsertype(id: number): void {
      this.closeEvent.emit(id);
    }

  }
