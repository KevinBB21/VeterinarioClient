import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic';
import { IUser } from 'src/app/model/user-interface';
import { UserService } from 'src/app/service/User.service';
import { SessionService } from 'src/app/service/session.service';
@Component({
  selector: 'app-user-finder-admin',
  templateUrl: './user-finder-admin.component.html',
  styleUrls: ['./user-finder-admin.component.css']
})
export class UserFinderAdminComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();

  private pListContent!: IUser[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  private OrderFilter: string;
  private SortFilter: string;
  id_User: number = 0;


  constructor(
    private oUserService: UserService,
    private oSessionService: SessionService
  ) {}

  ngOnInit(): void {
      localStorage.getItem;
    this.getPage();
  }

 
  getPage() {
    this.oUserService.getUserPlist(this.numberPage, this.pageRegister , this.termino ,this.id_User , this.OrderFilter , this.SortFilter)
      .subscribe({
        next: (resp: IPage<IUser>) => {
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

  getPlistContent(): IUser[] {
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

  filterByUser(id: number): void {
    this.id_User = id;
    this.numberPage = 0;
    this.getPage();
  }

  selectionUser(id: number): void {
    this.closeEvent.emit(id);
  }

}


