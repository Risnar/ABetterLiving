import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskEditorPage } from './task-editor';

@NgModule({
  declarations: [
    TaskEditorPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskEditorPage),
  ],
})
export class TaskEditorPageModule { }
