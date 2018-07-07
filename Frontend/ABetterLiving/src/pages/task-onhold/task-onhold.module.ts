import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskOnholdPage } from './task-onhold';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TaskOnholdPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskOnholdPage),
    ComponentsModule
  ],
})
export class TaskOnholdPageModule {}
