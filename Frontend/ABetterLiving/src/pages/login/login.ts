import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';

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

  private username: string = '';
  private password: string = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public loginProvider: LoginProvider, public globalVars: GlobalVarsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public login() {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('jwt_token_expires');
    localStorage.clear();

    this.loginProvider.requestAccessToken(this.username, this.password).subscribe(authtoken => {
      if (authtoken != null) {
        //Save the user token from server to local storage
        localStorage.setItem('jwt_token', authtoken.data.token);
        localStorage.setItem('jwt_token_expires', authtoken.data.expiresAt);
        //Set global user varibale
        this.globalVars.setActiveUser(authtoken.data.user);
        //Navigate to home page
        this.navCtrl.setRoot('HomePage');
      } else {
        localStorage.removeItem('jwt_token');
        localStorage.removeItem('jwt_token_expires');
        console.log("Access Denied");

        this.showLoginAlert();
      }
    },
      error => {
        this.showLoginAlert();
        console.log(error);
      });
  }

  private showLoginAlert() {
    const alert = this.alertCtrl.create({
      title: "Login fehlgeschlagen",
      subTitle: 'Der Benutzername und das Passwort stimmen nicht überein.',
      buttons: ['OK']
    });
    alert.present();
  }

}
