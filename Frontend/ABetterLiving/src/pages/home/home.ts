import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { Users } from '../../model/Users';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user:Users;

  constructor(public navCtrl: NavController, public navParams: NavParams, public globalVars: GlobalVarsProvider) {
    this.user = globalVars.getActiveUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Homepage');
  }
}