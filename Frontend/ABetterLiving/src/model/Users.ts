import { Task } from "./task";

export interface Users {
    UserID: number;
    Username: string;
    Email: string;
    Password: string;
    taskes: Task[];
}