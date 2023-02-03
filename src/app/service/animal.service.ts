import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage } from '../model/generic';
import { Observable } from 'rxjs';
import { API_URL } from 'src/environments/environment';
import { IAnimal, IAnimal2Form, IAnimal2Send } from '../model/animal-interface'


@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private entityURL = '/animal';
  url: string = ""

  constructor(
    private oHttp: HttpClient
    
  ) { 
    this.url = `${API_URL}${this.entityURL}`;
  }

  getAnimalPlist(page: number, size: number, termino: string,id_tipoanimal: number, 
    strSortField: string, strOrderDirection: string): Observable<IPage<IAnimal>> {
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
    return this.oHttp.get<IPage<IAnimal>>("http://localhost:8082/animal", {withCredentials:true, params: params });
  }

  getOne(id: number): Observable<IAnimal> {
    return this.oHttp.get<IAnimal>(this.url + "/" + id , {withCredentials:true});
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id , {withCredentials:true});
  }

  updateOne(oAnimal2Send: IAnimal2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oAnimal2Send , {withCredentials:true});
  }

  newOne(oAnimal2Send: IAnimal2Send): Observable<number> {       
    return this.oHttp.post<number>(this.url + '/' , oAnimal2Send, {withCredentials:true});
  }

  getCountUsuarios(): Observable<number> {
    return this.oHttp.get<number>(this.url + "/count", {withCredentials:true});
  }

}



