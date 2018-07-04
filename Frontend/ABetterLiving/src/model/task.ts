import { DateTime } from "ionic-angular/umd";
import { Lists } from "./Lists";
import { Users } from "./Users";

export interface Task {
    TaskID: number;
    Title: string;
    Priority: number;
    RequiredTime: DateTime;
    DueDate: Date;
    CreationDate: number;
    Status: number;
    list: Lists;
    projects: Lists;
    owner: Users;
}

/*export class TaskImpl implements Task {
    id: number;
    name: string;
    done: boolean;
    creationDate: Date;
    dueDate: Date;
    durationInMinutes: number;
    project: Project;
    context: Context;
}
*/