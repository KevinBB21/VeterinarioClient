import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, catchError, retry, tap, throwError } from 'rxjs';
import { API_URL, environment, httpOptions } from 'src/environments/environment';
import { IUser } from '../model/user-interface';

@Injectable({
    providedIn: 'root'
})

export class SessionService {


  subject = new Subject<void>();

    constructor(private oHttpClient: HttpClient) { }

  sURL = API_URL + '/session';

  onCheck = new EventEmitter<any>();

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
      if (environment) console.log("SessionService: error: " + errorMessage);
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      if (environment) console.log("SessionService: error: " + errorMessage);
    }    
    return throwError(errorMessage);
  }

  login(loginData: String): Observable<String> {
    if (environment) console.log("SessionService: login");
    return this.oHttpClient.post<String>(this.sURL, loginData, httpOptions).pipe(
      tap((u: String) => console.log("session.service login HTTP request executed", u)),
      retry(1),
      catchError(this.handleError));
  }

  checkSession(): Observable<IUser> {
    return this.oHttpClient.get<IUser>(this.sURL, httpOptions);
  }

  logout(): Observable<String> {
    if (environment) console.log("SessionService: logout");
    return this.oHttpClient.delete<String>(this.sURL, httpOptions).pipe(
    retry(1),
    catchError(this.handleError));
  }

  check(): Observable<String> {
    return this.oHttpClient.get<String>(this.sURL, httpOptions)
  }

  reload() {
    this.subject.next();
  }


}
