import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage } from '../model/generic';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { IVacuna, IVacuna2Form, IVacuna2Send } from '../model/vacuna-interface'
import { VacunaResponse } from '../model/vacuna-response-interface';


@Injectable({
  providedIn: 'root'
})
export class VacunaService {

  private entityURL = '/vacuna';
  url: string = ""

  constructor(
    private oHttp: HttpClient
    
  ) { 
    this.url = `${API_URL}${this.entityURL}`;
  }

  getVacunaPlist(page: number, size: number, termino: string,id_tipoanimal: number, 
    strSortField: string, strOrderDirection: string): Observable<IPage<IVacuna>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
      if (id_tipoanimal != 0) {
        params = params.set("tipoanimal", id_tipoanimal);
      }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IVacuna>>("http://localhost:8082/vacuna", {withCredentials:true, params: params });
  }

  getOne(id: number): Observable<IVacuna> {
    return this.oHttp.get<IVacuna>(this.url + "/" + id , {withCredentials:true});
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id , {withCredentials:true});
  }

  updateOne(oVacuna2Send: IVacuna2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oVacuna2Send , {withCredentials:true});
  }

  newOne(oVacuna2Send: IVacuna2Send): Observable<number> {       
    return this.oHttp.post<number>(this.url + '/' , oVacuna2Send, {withCredentials:true});
  }

  getCountUsuarios(): Observable<number> {
    return this.oHttp.get<number>(this.url + "/count", {withCredentials:true});
  }

 

  

}



