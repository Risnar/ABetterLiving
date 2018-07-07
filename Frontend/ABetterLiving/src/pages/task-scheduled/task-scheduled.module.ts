import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskScheduledPage } from './task-scheduled';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TaskScheduledPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskScheduledPage),
    ComponentsModule
  ],
})
export class TaskScheduledPageModule {}
