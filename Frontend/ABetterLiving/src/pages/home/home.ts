import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { NativeAudio } from '@ionic-native/native-audio';

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
    private nativeAudio: NativeAudio,
    public globalVars: GlobalVarsProvider) {
    this.user = this.globalVars.getActiveUser();
  }


  ionViewDidLoad() {
    //edit task
    this.nativeAudio.preloadSimple('yeah', 'www/sounds/yeah.wav');
    this.nativeAudio.preloadSimple('woohoo', 'www/sounds/woohoo.wav');
    this.nativeAudio.preloadSimple('unbelievable', 'www/sounds/unbelievable.wav');
    //new task
    this.nativeAudio.preloadSimple('doyourbest', 'www/sounds/Do-Your-Best.mp3');
    //task status
    this.nativeAudio.preloadSimple('onetask', 'www/sounds/1-Task.mp3');
    this.nativeAudio.preloadSimple('twotasks', 'www/sounds/2-Tasks.mp3');
    this.nativeAudio.preloadSimple('threetasks', 'www/sounds/3-Tasks.mp3');
    this.nativeAudio.preloadSimple('severaltasks', 'www/sounds/Several-Tasks.mp3');
    //task end
    this.nativeAudio.preloadSimple('nicework', 'www/sounds/nice-work.wav');
    //Speichern/update
    this.nativeAudio.preloadSimple('thatsit', 'www/sounds/thats-it.wav');
    //Fehler
    this.nativeAudio.preloadSimple('nexttime', 'www/sounds/maybe-next-time-huh.wav');

  }
}