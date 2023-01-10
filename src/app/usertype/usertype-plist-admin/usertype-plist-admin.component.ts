import { Component, OnInit } from '@angular/core';
import { IPage } from 'src/app/model/generic';
import { IUsertype } from 'src/app/model/usertype-interface';
import { UsertypeService } from 'src/app/service/usertype.service';

@Component({
  selector: 'app-usertype-plist-admin',
  templateUrl: './usertype-plist-admin.component.html',
  styleUrls: ['./usertype-plist-admin.component.css']
})
export class UsertypePlistAdminComponent implements OnInit {
  responseFromServer: IPage<IUsertype>;
  //
  strTermFilter: string = "";
  id_usertypeFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oUsertypeService: UsertypeService
  ) {
    this.getPage();
  }

  ngOnInit() {

  }

  getPage() {
    this.oUsertypeService.getUserstypePlist(this.page, this.numberOfElements)
      .subscribe({
        next: (resp: IPage<IUsertype>) => {
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
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByUsertype(id: number): void {
    this.id_usertypeFilter = id;
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
