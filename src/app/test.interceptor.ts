import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {
 // constructor(private authService: AuthService) {}
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const reqCopy = request.url
    console.log("reqCopy+++++++++++++++++++++++++++++++++++++++++++++++",reqCopy)
    return next.handle(request);
  }
}
