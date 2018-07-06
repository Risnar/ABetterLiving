import { Task } from "./task";

export interface User {
    userID: number;
    username: string;
    email: string;
    password: string;
    taskes: Task[];
}