import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic';
import { IAnimal } from 'src/app/model/animal-interface';
import { AnimalService } from 'src/app/service/animal.service';
import { SessionService } from 'src/app/service/session.service';
 
@Component({
  selector: 'app-animal-finder-admin',
  templateUrl: './animal-finder-admin.component.html',
  styleUrls: ['./animal-finder-admin.component.css']
})
export class AnimalFinderAdminComponent implements OnInit {


  @Output() closeEvent = new EventEmitter<number>();

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



  selectionAnimal(id: number): void {
    this.closeEvent.emit(id);
  }

}

