import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';
import { forkJoin, timeout } from 'rxjs';
import { of, interval } from 'rxjs';
import { mergeMap, map, filter } from 'rxjs/operators';
import { ErrorHandleService } from './error-handle.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  panelOpenState = false;
  title = 'sideNav';
  user:User = {email:"abc",mobile:1}
  //res = setTimeout(()=>{this.myLoderFunc()},2000)
 // res = setInterval(()=>{this.myLoderFunc()},2000)
 res= setTimeout(() => {
  this.myLoderFunc()
  },4000)




  

  constructor(
    private http: HttpClient,
    private _errorHandleService:ErrorHandleService

  ) { }

  
  ngOnInit() {

    this.myErrorHandleFunction()
    this.makeApiCalls()
    const val = of(1,2,3,4,5,6,7)
    val.pipe(
      // filter((i)=>{ return i == 50}),
      map((x:any)=>{ return x*10},
     

    ))
   .subscribe((i)=>{console.log(i)}) }

  myLoderFunc() {
     return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
     .subscribe(res=>console.log(res))

     
  }

  // **************
  makeApiCalls() {
    const api1 = this.http.get('https://jsonplaceholder.typicode.com/posts');
    const api2 = this.http.get('https://jsonplaceholder.typicode.com/posts');
    const api3 = this.http.get('https://jsonplaceholder.typicode.com/posts');
  
    forkJoin([api1, api2, api3]).subscribe({
      next: ([response1, response2, response3]) => {
        console.log('API 1 Response:', response1);
        console.log('API 2 Response:', response2);
        console.log('API 3 Response:', response3);
        
      },
      error: (error) => {
        console.error('Error in API calls:', error);
      },
    });}
  // *************

  myErrorHandleFunction(){
    this._errorHandleService.myApiCall().subscribe((res:any)=>{
      console.log("Error handle api call",res)

    },(error:any)=>{
      console.log("Gated Error",error)
    })
  }
}

export interface User {
  email?: string;
  mobile?:number
}

export enum status{
  Quotation='Quotation',
  CounterSale='CounterSale'
}


