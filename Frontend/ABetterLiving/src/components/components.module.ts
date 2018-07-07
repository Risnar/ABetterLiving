import { NgModule } from '@angular/core';
import { TasklistComponent } from './tasklist/tasklist';
import { IonicModule } from "ionic-angular";

@NgModule({
        declarations: [
                TasklistComponent,
        ],
        imports: [
                IonicModule
        ],
        exports: [
                TasklistComponent,
        ]
})
export class ComponentsModule { }
