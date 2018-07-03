import { NgModule } from '@angular/core';
import { TasklistComponent } from './tasklist/tasklist';
import { TaskComponent } from './task/task';
import { ProjectlistComponent } from './projectlist/projectlist';
import { ProjectComponent } from './project/project';
import { UserComponent } from './user/user';
@NgModule({
	declarations: [TasklistComponent,
    TaskComponent,
    ProjectlistComponent,
    ProjectComponent,
    UserComponent],
	imports: [],
	exports: [TasklistComponent,
    TaskComponent,
    ProjectlistComponent,
    ProjectComponent,
    UserComponent]
})
export class ComponentsModule {}
