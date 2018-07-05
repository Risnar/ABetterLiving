import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { TaskProvider } from '../providers/task/task';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { JWTInterceptor } from '../security/jwtInterceptor';
import { LoginPageModule } from '../pages/login/login.module';
import { AllTasksPage } from '../pages/all-tasks/all-tasks';
import { TasklistComponent } from '../components/tasklist/tasklist';

@NgModule({
  declarations: [
    MyApp,
    AllTasksPage,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AllTasksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    TaskProvider,
    LoginProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }
  ]
})
export class AppModule { }
