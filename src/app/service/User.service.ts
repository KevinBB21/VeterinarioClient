import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage } from '../model/generic';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { IUser, IUser2Form, IUser2Send } from '../model/user-interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private entityURL = '/user';
  url: string = ""

  constructor(
    private oHttp: HttpClient
    
  ) { 
    this.url = `${API_URL}${this.entityURL}`;
  }

  getUserPlist(page: number, size: number, termino: string,id_usertype: number, 
    strSortField: string, strOrderDirection: string): Observable<IPage<IUser>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
      if (id_usertype != 0) {
        params = params.set("usertype", id_usertype);
      }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IUser>>("http://localhost:8082/user", {withCredentials:true, params: params });
  }

  getOne(id: number): Observable<IUser> {
    return this.oHttp.get<IUser>(this.url + "/" + id , {withCredentials:true});
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id , {withCredentials:true});
  }

  updateOne(oUser2Send: IUser2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oUser2Send , {withCredentials:true});
  }

  newOne(oUser2Send: IUser2Send): Observable<number> {       
    return this.oHttp.post<number>(this.url + '/' , oUser2Send, {withCredentials:true});
  }

  getCountUsuarios(): Observable<number> {
    return this.oHttp.get<number>(this.url + "/count", {withCredentials:true});
  }

}



