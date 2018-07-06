import { User } from "./user";

export interface List {
    listID: number;
    type: string;
    name: string;
    user: User;
}