import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AllTasksPage } from '../pages/all-tasks/all-tasks';
import { TaskTodayComponent } from '../components/task-today/task-today';
import { TaskSomewhenComponent } from '../components/task-somewhen/task-somewhen';
import { TaskOnholdComponent } from '../components/task-onhold/task-onhold';
import { TaskDoneComponent } from '../components/task-done/task-done';
import { TaskScheduledComponent } from '../components/task-scheduled/task-scheduled';
import { ComponentsModule } from '../components/components.module';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, icon: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public component: ComponentsModule
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: 'home', component: HomePage },
      { title: 'Alle', icon: 'apps', component: AllTasksPage },
      { title: 'Heute', icon: 'clock', component: TaskTodayComponent },
      { title: 'Irgendwann', icon: 'help-circle', component: TaskSomewhenComponent },
      { title: 'Warten auf', icon: 'pause', component: TaskOnholdComponent },
      { title: 'Erledigt', icon: 'checkbox-outline', component: TaskDoneComponent },
      { title: 'Kalender', icon: 'calendar', component: TaskScheduledComponent }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  public logout() {
    localStorage.removeItem('jwt_token');
    localStorage.removeItem('jwt_token_expires');
    this.nav.setRoot('LoginPage');

  }

}
