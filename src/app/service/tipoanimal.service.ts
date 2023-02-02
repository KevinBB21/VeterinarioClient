import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { TipoanimalResponse } from '../model/tipoanimal-response-interface';
import { ITipoanimal } from '../model/tipoanimal-interface'; 

@Injectable({
  providedIn: 'root'
})
export class TipoanimalService {

  constructor( private oHttp : HttpClient ) { }

  private entityURL: string = "/tipoanimal";


  getTipoanimalPlist(page: number, size: number): Observable<TipoanimalResponse>{
    let params = new HttpParams()
    .set("page", page)
    .set("size", size);

    const url : string = `${API_URL}${this.entityURL}`;
    return this.oHttp.get<TipoanimalResponse>(url,{params: params});
  }

  getOne(id: number): Observable<ITipoanimal> {
    return this.oHttp.get<ITipoanimal>(`${API_URL}${this.entityURL}` + "/" + id,{withCredentials:true});
  }
}
