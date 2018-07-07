import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthToken } from '../../model/authToken';


@Injectable()
export class LoginProvider {

  // URL ANPASSEN AN LOKALE IP
  // private authserviceUrl = 'http://localhost:8080';  // Standard-URL to web api
  private authserviceUrl = 'http://192.168.178.142:8080';  // URL to web api

  constructor(
    public http: HttpClient
  ) {
    console.log('Hello LoginProvider');
  }

  requestAccessToken(username: String, password: String): Observable<AuthToken> {
    return this.http.get<AuthToken>(this.authserviceUrl + "/login", { headers: new HttpHeaders({ 'Authorization': 'Basic ' + btoa(username + ":" + password) }) });
  }

}
