import { NgModule } from '@angular/core';
import { TasklistComponent } from './tasklist/tasklist';
import { IonicModule } from "ionic-angular";
import { TaskDoneComponent } from './task-done/task-done';
import { TaskTodayComponent } from './task-today/task-today';
import { TaskSomewhenComponent } from './task-somewhen/task-somewhen';
import { TaskOnholdComponent } from './task-onhold/task-onhold';
import { TaskScheduledComponent } from './task-scheduled/task-scheduled';

@NgModule({
        declarations: [
                TasklistComponent,
                TaskDoneComponent,
                TaskTodayComponent,
                TaskSomewhenComponent,
                TaskOnholdComponent,
                TaskScheduledComponent,
        ],
        imports: [
                IonicModule
        ],
        exports: [
                TasklistComponent,
                TaskDoneComponent,
                TaskTodayComponent,
                TaskSomewhenComponent,
                TaskOnholdComponent,
                TaskScheduledComponent,
        ]
})
export class ComponentsModule { }
