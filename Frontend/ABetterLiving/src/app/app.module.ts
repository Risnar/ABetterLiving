import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { TaskProvider } from '../providers/task/task';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { JWTInterceptor } from '../security/jwtInterceptor';
import { LoginPageModule } from '../pages/login/login.module';
import { GlobalVarsProvider } from '../providers/global-vars/global-vars';
import { HomePageModule } from '../pages/home/home.module';
import { AllTasksPageModule } from '../pages/all-tasks/all-tasks.module';
import { TaskEditorPageModule } from '../pages/task-editor/task-editor.module';
import { NativeAudio } from '@ionic-native/native-audio';
import { TaskDonePageModule } from '../pages/task-done/task-done.module';
import { TaskTodayPageModule } from '../pages/task-today/task-today.module';
import { TaskScheduledPageModule } from '../pages/task-scheduled/task-scheduled.module';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    HomePageModule,
    AllTasksPageModule,
    TaskEditorPageModule,
    TaskDonePageModule,
    TaskTodayPageModule,
    TaskScheduledPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
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
    },
    GlobalVarsProvider,
    NativeAudio,
  ]
})
export class AppModule { }
