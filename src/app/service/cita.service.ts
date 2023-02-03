import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage } from '../model/generic';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { ICita, ICita2Form, ICita2Send } from '../model/cita-interface'


@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private entityURL = '/cita';
  url: string = ""

  constructor(
    private oHttp: HttpClient
    
  ) { 
    this.url = `${API_URL}${this.entityURL}`;
  }

  getCitaPlist(page: number, size: number, termino: string,id_animal: number, id_servicio: number, id_usuario: number, 
    strSortField: string, strOrderDirection: string): Observable<IPage<ICita>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
      if (id_servicio != 0) {
        params = params.set("servicio", id_servicio);
      }
      if (id_animal != 0) {
        params = params.set("animal", id_animal);
      }
      if (id_usuario != 0) {
        params = params.set("user", id_usuario);
      }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<ICita>>("http://localhost:8082/cita", {withCredentials:true, params: params });
  }

  getOne(id: number): Observable<ICita> {
    return this.oHttp.get<ICita>(this.url + "/" + id , {withCredentials:true});
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id , {withCredentials:true});
  }

  updateOne(oCita2Send: ICita2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oCita2Send , {withCredentials:true});
  }

  newOne(oCita2Send: ICita2Send): Observable<number> {       
    return this.oHttp.post<number>(this.url + '/' , oCita2Send, {withCredentials:true});
  }

  getCountUsuarios(): Observable<number> {
    return this.oHttp.get<number>(this.url + "/count", {withCredentials:true});
  }

}



