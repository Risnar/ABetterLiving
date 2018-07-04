import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private username:string = '';
  private password:string =  '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider:LoginProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login() {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('jwt_token_expires');
    localStorage.clear();

    this.loginProvider.requestAccessToken(this.username,this.password).subscribe(authtoken => {
      if (authtoken !=  null) {
        localStorage.setItem('jwt_token', authtoken.data.token);
        localStorage.setItem('jwt_token_expires', authtoken.data.expiresAt);
        this.navCtrl.setRoot('HomePage');
      } else {
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('jwt_token_expires');
        console.log("Access Denied");
      }
    },
      error => {
        console.log(error);
      });
  }

}
