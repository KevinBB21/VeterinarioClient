import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { UsertypeResponse } from '../model/usertype-response-interface';
import { IUsertype } from '../model/usertype-interface';

@Injectable({
  providedIn: 'root'
})
export class UsertypeService {

  constructor( private oHttp : HttpClient ) { }

  private entityURL: string = "/usertype";


  getUserstypePlist(page: number, size: number): Observable<UsertypeResponse>{
    let params = new HttpParams()
    .set("page", page)
    .set("size", size);

    const url : string = `${API_URL}${this.entityURL}`;
    return this.oHttp.get<UsertypeResponse>(url,{params: params});
  }

  getOne(id: number): Observable<IUsertype> {
    return this.oHttp.get<IUsertype>(`${API_URL}${this.entityURL}` + "/" + id,{withCredentials:true});
  }
}
