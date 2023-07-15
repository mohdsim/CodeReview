import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class InterceptorInterceptor implements HttpInterceptor {

  constructor() { }
  
  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   const reqCopy = request.url
  //    const cloneReq=request.clone()
  //    console.log("cloneReq",cloneReq)
  //   console.log("reqCopy->>>>>>>>>>>>>>>>",reqCopy)
  //  // return next.handle(request);
  //  return next.handle(cloneReq).pipe(
  //   catchError((error:any) => {
  //     console.log('error in intercept')
  //     console.log('error.message ->>>>',error.message)
  //     console.error(error);
  //     return throwError(error.message);
  //   })
  // )
  // }

  setHeaders() {
      const token = localStorage.getItem('token');
      const params:any = {};
      let headers: HttpHeaders;
      if (token) {
          params['Authorization'] = `Bearer ${token}`;
          headers = new HttpHeaders(params);
          return headers;
      }
      return
      //return headers;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const reqCopy = req.url
      const cloneReq=req.clone()
      console.log("cloneReq--------------------",cloneReq)
      const modifiedReq = req.clone({ headers: this.setHeaders() });
      return next.handle(modifiedReq);
  }
}
