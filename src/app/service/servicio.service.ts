import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage } from '../model/generic';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { IServicio, IServicio2Form, IServicio2Send } from '../model/servicio-interface'


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private entityURL = '/servicio';
  url: string = ""

  constructor(
    private oHttp: HttpClient
    
  ) { 
    this.url = `${API_URL}${this.entityURL}`;
  }

  getServicioPlist(page: number, size: number, termino: string,id_tiposervicio: number, 
    strSortField: string, strOrderDirection: string): Observable<IPage<IServicio>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
      if (id_tiposervicio != 0) {
        params = params.set("tiposervicio", id_tiposervicio);
      }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IServicio>>("http://localhost:8082/servicio", {withCredentials:true, params: params });
  }

  getOne(id: number): Observable<IServicio> {
    return this.oHttp.get<IServicio>(this.url + "/" + id , {withCredentials:true});
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id , {withCredentials:true});
  }

  updateOne(oServicio2Send: IServicio2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oServicio2Send , {withCredentials:true});
  }

  newOne(oServicio2Send: IServicio2Send): Observable<number> {       
    return this.oHttp.post<number>(this.url + '/' , oServicio2Send, {withCredentials:true});
  }

  getCountUsuarios(): Observable<number> {
    return this.oHttp.get<number>(this.url + "/count", {withCredentials:true});
  }

}



