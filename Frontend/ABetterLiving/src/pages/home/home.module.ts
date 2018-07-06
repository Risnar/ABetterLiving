import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { TasklistComponent } from '../../components/tasklist/tasklist';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ComponentsModule
  ],
})
export class HomePageModule { }
