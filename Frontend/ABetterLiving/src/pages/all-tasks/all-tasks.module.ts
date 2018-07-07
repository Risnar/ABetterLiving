import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllTasksPage } from './all-tasks';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AllTasksPage
  ],
  imports: [
    IonicPageModule.forChild(AllTasksPage),
    ComponentsModule
  ],
})
export class AllTasksPageModule { }
