import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PageInterceptor implements HttpInterceptor {
    // *************** This is Working in NegBuy
    //   // let headers: HttpHeaders;
    //   console.log("req.url = ",this.getURLPath(req.url))
    //   console.log("req.url = ",req.url)
  
    //   // let userId:any = req?.params.get("User-id")?req.params.get("User-id")?.toString():'00 '
    //   let userId:any = req?.params.get("User-id")
    //   let headers = new HttpHeaders({"User-id":userId });
      
    //   const clone = req.clone({
    //     headers,
    //   });
        
    //   return next.handle(clone);
    // }
    // ***************

  constructor() {}
  // ***************
  // getURLPath = (urlString: string) => {
  //   const tempURL = new URL(urlString);
  //   return tempURL.pathname.toLowerCase().replace(/^\/|\/$/gm, '');
  // };
  // ***************

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    console.log("Requested Url ----->>",request.url)
    return next.handle(request);
  }
}
