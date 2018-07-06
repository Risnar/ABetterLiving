import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../../model/Users';

/*
  Generated class for the GlobalVarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVarsProvider {

  private activeUser:Users;

  constructor() {
  }

  setActiveUser(value) {
    this.activeUser = value;
  }

  getActiveUser() {
    if(this.activeUser != null){
      return this.activeUser;
    }else{
      return {
        userID: 0,
        username: "-",
        email: "-",
        password: "-",
        taskes: []
      } as Users;
    }
  }

}
