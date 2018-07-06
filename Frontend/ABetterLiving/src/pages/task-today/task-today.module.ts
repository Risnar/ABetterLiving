import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskTodayPage } from './task-today';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TaskTodayPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskTodayPage),
    ComponentsModule
  ],
})
export class TaskTodayPageModule {}
