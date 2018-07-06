import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { App } from 'ionic-angular';


@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    constructor(
        public app: App
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        let token: String = localStorage.getItem("jwt_token");
        if (token !== null) {
            authReq = req.clone({ headers: req.headers.set("Authorization", "Bearer " + token) });
        }
        return next.handle(authReq).catch((error) => {
            if (error instanceof HttpErrorResponse) {

                if (error.status === 401) {
                    localStorage.removeItem("jwt_token");
                    localStorage.removeItem("jwt_token_expires");
                    localStorage.clear();
                    this.app.getActiveNav().setRoot("LoginPage");
                }
            }
            console.log("Error Occurred");

            return Observable.throw(error);
        }) as any;
    }

}