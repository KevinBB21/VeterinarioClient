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

  private pListContent!: IAnimal[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  private OrderFilter: string;
  private SortFilter: string;
  id_Animal: number = 0;


  constructor(
    private oAnimalService: AnimalService,
    private oSessionService: SessionService
  ) {}

  ngOnInit(): void {
      localStorage.getItem;
    this.getPage();
  }

 
  getPage() {
    this.oAnimalService.getAnimalPlist(this.numberPage, this.pageRegister , this.termino ,this.id_Animal , this.OrderFilter , this.SortFilter)
      .subscribe({
        next: (resp: IPage<IAnimal>) => {
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

  getPlistContent(): IAnimal[] {
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

  filterByAnimal(id: number): void {
    this.id_Animal = id;
    this.numberPage = 0;
    this.getPage();
  }

  selectionAnimal(id: number): void {
    this.closeEvent.emit(id);
  }

}

