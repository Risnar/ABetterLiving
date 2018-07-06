import { User } from "./user";

export interface AuthToken {
    msg: string,
    data: {
        token: string;
        expiresAt: string;
        user: User;
    },

}
