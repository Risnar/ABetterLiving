import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/Observable/of';
import { AuthToken } from '../../model/authToken';


@Injectable()
export class LoginProvider {

  private authserviceUrl = 'http://localhost:8080';  // URL to web api

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider');
  }

  requestAccessToken(username: String, password: String): Observable<AuthToken> {
    return this.http.get<AuthToken>(this.authserviceUrl+"/login", { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(username + ":" + password) })});
  }

}
