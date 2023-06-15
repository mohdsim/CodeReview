import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const reqCopy = request.url
     const cloneReq=request.clone()
     console.log("cloneReq",cloneReq)
    console.log("reqCopy->>>>>>>>>>>>>>>>",reqCopy)
   // return next.handle(request);
   return next.handle(cloneReq).pipe(
    catchError((error:any) => {
      console.log('error in intercept')
      console.log('error.message ->>>>',error.message)
      console.error(error);
      return throwError(error.message);
    })
  )
  }
}
