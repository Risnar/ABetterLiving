import { Users } from "./Users";

export interface AuthToken {
    msg: string,
    data: {
        token: string;
        expiresAt: string;
        user: Users;
    },

}
