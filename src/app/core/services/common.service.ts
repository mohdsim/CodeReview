import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, timeout } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  getOrganisationsTableData: any;

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    public auth: AuthService,
    private router: Router,
    private dialogRef: MatDialog
  ) { }

  showSnackbar(message: string, action?: any, duration?: number) {
    if (!duration) {
      duration = 3000
    }
    this.snackbar.open(message, 'close', {
      duration
    });
  }

  // isWithoutHandler use to manage the catchError Handler
  commonGetService(
    endPoint: string,
    params?: HttpParams,
    isWithoutHandler?: boolean,
    HTTPOptions?: object
  ): Observable<any> {
    return this.http
      .get<any>(environment.baseUrl + endPoint, { params, ...HTTPOptions })
      .pipe(
        // timeout(appConstant.API_TIMEOUT),
        // catchError(
        //   isWithoutHandler ? this.handleErrorWithoutDialog : this.handleError
        // )
      );
  }
  commonPostService(
    endPoint: string,
    body: any,
    params?: HttpParams,
    isWithoutHandler?: boolean
  ): Observable<any> {
    return this.http
      .post<any>(environment.baseUrl + endPoint, body, { params })
      .pipe(
        // timeout(appConstant.API_TIMEOUT),
        // catchError(
        //   isWithoutHandler ? this.handleErrorWithoutDialog : this.handleError
        // )
      );
  }
  commonPutService(
    endPoint: string,
    body: any,
    params?: HttpParams,
    
  ): Observable<any> {
    return this.http
      .put<any>(environment.baseUrl + endPoint, body, { params })
      
  }
  commonPatchService(
    endPoint: string,
    body: any,
    params?: HttpParams,
  ): Observable<any> {
    return this.http
      .patch<any>(environment.baseUrl + endPoint, body, { params })
      
  }
  commonDeleteService(
    endPoint: string,
    params?: HttpParams,
    request?: any
  ): Observable<any> {
    return this.http
      .delete<any>(environment.baseUrl + endPoint, { params, body: request })
  }


  // commonGetServiceWithoutHandler(
  //   endPoint: string,
  //   params?: HttpParams
  // ): Observable<any> {
  //   return this.http
  //     .get<any>(environment.baseUrl + endPoint, { params })
  //     .pipe(timeout(appConstant.API_TIMEOUT));
  // }

  



 


  
  

  // onSetHttpParams(commonRequest: CommonRequest | OtherRequest) {
  //   try {
  //     let params = new HttpParams();
  //     for (const key in commonRequest) {
  //       if (Object.prototype.hasOwnProperty.call(commonRequest, key)) {
  //         const element = commonRequest[key];
  //         if (element) {
  //           if (key === 'sortColumns') {
  //             element.forEach((obj: { active: any; direction: any }) => {
  //               params = params.append(
  //                 'sort',
  //                 `${obj.active}:${obj.direction}`
  //               );
  //             });
  //           } else {
  //             params = params.append(key, element);
  //           }
  //         }
  //       }
  //     }
  //     return params;
  //   } catch (error) {
  //     return null;
  //   }
  // }

  

 

  

  

 

  


  commonGetServiceForDownload(
    endPoint: string,
    params?: HttpParams
  ): Observable<any> {
    return this.http
      .get(environment.baseUrl + endPoint, {
        params,
        responseType: 'arraybuffer',
      })
     // .pipe(timeout(appConstant.API_TIMEOUT), catchError(this.handleError));
  }

  commonPostServiceForDownload(
    endPoint: string,
    body: any,
    params?: HttpParams,
    isWithoutHandler?: boolean
  ): Observable<any> {
    return this.http
      .post(environment.baseUrl + endPoint, body, {
        params,
        responseType: 'blob'
      })
      
  }
 
 



  
  

  
 

 

  


 

  


 
}

