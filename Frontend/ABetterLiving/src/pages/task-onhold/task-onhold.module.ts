import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskOnholdPage } from './task-onhold';

@NgModule({
  declarations: [
    TaskOnholdPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskOnholdPage),
  ],
})
export class TaskOnholdPageModule {}
