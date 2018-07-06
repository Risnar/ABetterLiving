import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public globalVars: GlobalVarsProvider
  ) {
    this.user = globalVars.getActiveUser();
    // this.listType = globalVars.getListType();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Homepage');
  }
}