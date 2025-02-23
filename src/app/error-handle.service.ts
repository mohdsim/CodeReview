import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {

  constructor(
    private _httpClint:HttpClient
  ) { }


 myApiCall(){
  return this._httpClint.get('https://jsonplaceholder.typicode.com/posts').pipe(
     catchError(this.handleError))
 }

 private handleError(error:HttpErrorResponse){
 
  let errorMsg='Thanku'

  if(error.error instanceof ErrorEvent){
    errorMsg='this is clint error'
  }else{
      errorMsg=`Error Code: ${error.status}\nMessage: ${error.message}`;
  }

  console.error(error)

  return throwError(()=> new Error(errorMsg))

 }
}
