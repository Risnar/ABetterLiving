import { DateTime } from "ionic-angular/umd";

export interface SrvResponse {
    title: string,
    msg: string,
    action: string,
    successful: boolean,
    timestamp: DateTime,
    data: object
}