import { Component, OnInit } from '@angular/core';
import { IAnimal } from 'src/app/model/cita-interface';
import { IPage } from 'src/app/model/generic';
import { AnimalService } from 'src/app/service/animal.service';

@Component({
  selector: 'app-animal-plist-admin',
  templateUrl: './animal-plist-admin.component.html',
  styleUrls: ['./animal-plist-admin.component.css']
})
export class AnimalPlistAdminComponent implements OnInit {
  responseFromServer: IPage<IAnimal>;
  //
  strTermFilter: string = "";
  id_tipoanimalFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oAnimalService: AnimalService
  ) {
    this.getPage();
  }

  ngOnInit() {

  }

  getPage() {
    this.oAnimalService.getAnimalPlist(this.page, this.numberOfElements, this.strTermFilter,this.id_tipoanimalFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IAnimal>) => {
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
