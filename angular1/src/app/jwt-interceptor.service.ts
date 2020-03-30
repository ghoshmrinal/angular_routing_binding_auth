import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorsService implements HttpInterceptor {
  item: any;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //console.log("called Interceptor");
    // add authorization header with jwt token if available
    let currentUser = JSON.parse(JSON.stringify(sessionStorage.getItem('currentUser')));
    //currentUser.then((value)=>this.item=value)
    console.log("current user is"+currentUser);
    if (currentUser && currentUser.token) {
        request = request.clone({
            setHeaders: { 
                Authorization: `Bearer ${currentUser.token}`
            }
        });
    }

    return next.handle(request);
}
}

