import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICita } from 'src/app/model/cita-interface';
import { IPage } from 'src/app/model/generic';
import { CitaService } from 'src/app/service/cita.service';

@Component({
  selector: 'app-cita-plist-admin',
  templateUrl: './cita-plist-admin.component.html',
  styleUrls: ['./cita-plist-admin.component.css']
})
export class CitaPlistAdminComponent implements OnInit {

  responseFromServer: IPage<ICita>;
  //
  strTermFilter: string = "";
  id_animalFilter: number = 0;
  id_servicioFilter: number = 0;
  id_usuarioFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oCitaService: CitaService,
    private oActivatedRoute: ActivatedRoute,
    ) {
        const id_animal =  this.oActivatedRoute.snapshot.params['id_animal'];
        if(id_animal == null){
            this.id_animalFilter = 0;
        }else{
            this.id_animalFilter = id_animal;
        }
     
        const id_servicio =  this.oActivatedRoute.snapshot.params['id_servicio'];
        if(id_servicio == null){
            this.id_servicioFilter = 0;
        }else{
            this.id_servicioFilter = id_servicio;
        }
        
        const id_usuario =  this.oActivatedRoute.snapshot.params['id_usuario'];
        if(id_usuario == null){
            this.id_usuarioFilter = 0;
        }else{
            this.id_usuarioFilter = id_usuario;
        }
  }
  
  ngOnInit() {
    this.getPage();

  }

  getPage() {
    this.oCitaService.getCitaPlist(this.page, this.numberOfElements, this.strTermFilter,this.id_animalFilter,this.id_servicioFilter,this.id_usuarioFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<ICita>) => {
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
    this.setPage(1);
    this.getPage();
    
  }

  setFilterByAnimal(id: number): void {
    this.id_animalFilter = id;
    this.setPage(1);
    this.getPage();
  }

  setFilterByServicio(id: number): void {
    this.id_servicioFilter = id;
    this.setPage(1);
    this.getPage();
  }

  setFilterByUsuario(id: number): void {
    this.id_usuarioFilter = id;
    this.setPage(1);
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
