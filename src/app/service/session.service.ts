import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, catchError, filter, map, retry, tap, throwError } from 'rxjs';
import { API_URL, environment, httpOptions } from 'src/environments/environment';
import { IUser } from '../model/user-interface';

export enum Events {
  login,
  logout
}

export class EmitEvent {
  constructor(public event: Events, public token?: string) { }
}

@Injectable({
    providedIn: 'root'
})

export class SessionService {


  subject = new Subject<EmitEvent>();

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

  login(loginData: string): Observable<string> {
    if (environment) console.log("SessionService: login");
    return this.oHttpClient.post<string>(this.sURL, loginData, httpOptions).pipe(
      tap((u: string) => console.log("session.service login HTTP request executed", u)),
      retry(1),
      catchError(this.handleError));
  }

  checkSession(): Observable<IUser> {
    return this.oHttpClient.get<IUser>(this.sURL, httpOptions);
  }

  logout(): Observable<string> {
    if (environment) console.log("SessionService: logout");
    return this.oHttpClient.delete<string>(this.sURL, httpOptions).pipe(
    retry(1),
    catchError(this.handleError));
  }

  check(): Observable<string> {
    return this.oHttpClient.get<string>(this.sURL, httpOptions)
  }


  on(event: Events): Observable<string> {
    return this.subject.pipe(
        filter((e: EmitEvent) => {
            return e.event === event;
        }),
        map((e: EmitEvent) => {
            return e.token;
        })
    )
}

emit(event: EmitEvent) {
    this.subject.next(event);
}


}
