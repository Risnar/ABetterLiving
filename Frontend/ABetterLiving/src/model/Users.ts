import { Task } from "./task";

export interface Users {
    userID: number;
    username: string;
    email: string;
    password: string;
    taskes: Task[];
}