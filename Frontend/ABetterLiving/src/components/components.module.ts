import { NgModule } from '@angular/core';
import { TasklistComponent } from './tasklist/tasklist';
import { ProjectlistComponent } from './projectlist/projectlist';
import { ProjectComponent } from './project/project';
import { UserComponent } from './user/user';
import { CreateTaskComponent } from './create-task/create-task';
@NgModule({
	declarations: [TasklistComponent,
    ProjectlistComponent,
    ProjectComponent,
    UserComponent,
    CreateTaskComponent],
	imports: [],
	exports: [TasklistComponent,
    ProjectlistComponent,
    ProjectComponent,
    UserComponent,
    CreateTaskComponent]
})
export class ComponentsModule {}
