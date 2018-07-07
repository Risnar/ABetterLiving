import { List } from "./list";
import { User } from "./user";

export interface Task {
    taskID: number;
    title: string;
    note: string;
    priority: number;
    requiredTime: string;
    dueDate: string;
    creationDate: string;
    status: boolean;
    list: List;
    project: List;
    owner: User;
}