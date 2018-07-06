import { DateTime } from "ionic-angular/umd";
import { List } from "./list";
import { User } from "./user";

export interface Task {
    taskID: number;
    title: string;
    note: string;
    priority: number;
    requiredTime: DateTime;
    dueDate: Date;
    creationDate: number;
    status: number;
    list: List;
    project: List;
    owner: User;
}