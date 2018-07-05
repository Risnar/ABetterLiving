import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllTasksPage } from './all-tasks';
import { TasklistComponent } from '../../components/tasklist/tasklist';

@NgModule({
  declarations: [
    AllTasksPage,
  ],
  imports: [
    IonicPageModule.forChild(AllTasksPage),
    TasklistComponent
  ],
})
export class AllTasksPageModule {}
