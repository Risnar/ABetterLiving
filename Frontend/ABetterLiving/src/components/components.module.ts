import { NgModule } from '@angular/core';
import { TasklistComponent } from './tasklist/tasklist';
import { ProjectlistComponent } from './projectlist/projectlist';
import { ProjectComponent } from './project/project';
import { UserComponent } from './user/user';
import { CreateTaskComponent } from './create-task/create-task';
import { IonicModule } from "ionic-angular";
import { TaskEditorComponent } from './task-editor/task-editor';

@NgModule({
        declarations: [
                TasklistComponent,
                ProjectlistComponent,
                ProjectComponent,
                UserComponent,
                CreateTaskComponent,
    TaskEditorComponent
        ],
        imports: [
                IonicModule
        ],
        exports: [
                TasklistComponent,
                ProjectlistComponent,
                ProjectComponent,
                UserComponent,
                CreateTaskComponent,
    TaskEditorComponent
        ]
})
export class ComponentsModule { }
