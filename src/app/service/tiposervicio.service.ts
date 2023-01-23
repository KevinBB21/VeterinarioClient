import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { TiposervicioResponse } from '../model/tiposervicio-response-interface';
import { ITiposervicio } from '../model/servicio-interface'; 

@Injectable({
  providedIn: 'root'
})
export class TiposervicioService {

  constructor( private oHttp : HttpClient ) { }

  private entityURL: string = "/tiposervicio";


  getTiposervicioPlist(page: number, size: number): Observable<TiposervicioResponse>{
    let params = new HttpParams()
    .set("page", page)
    .set("size", size);

    const url : string = `${API_URL}${this.entityURL}`;
    return this.oHttp.get<TiposervicioResponse>(url,{params: params});
  }

  getOne(id: number): Observable<ITiposervicio> {
    return this.oHttp.get<ITiposervicio>(`${API_URL}${this.entityURL}` + "/" + id,{withCredentials:true});
  }
}
