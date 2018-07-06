import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskSomewhenPage } from './task-somewhen';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TaskSomewhenPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskSomewhenPage),
    ComponentsModule
  ],
})
export class TaskSomewhenPageModule {}
