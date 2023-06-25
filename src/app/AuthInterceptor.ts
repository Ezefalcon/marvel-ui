import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authRequest = request.clone({
      headers: request.headers.set('Content-Type', 'application/json')
        .set('Authorization', 'Basic ' + btoa("admin" + ':' + "admin"))
        .set('Access-Control-Allow-Origin', '*')
    });
    return next.handle(authRequest);
  }
}
