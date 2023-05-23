import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, filter, map, tap } from 'rxjs';
import { sellerApiResp } from '../interfaces';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {
  isClicked:boolean=false
  sendRequiredControl={
    name:null,
    add:null,
    email:null,
    mob:null,
    cont:null

  }
  onj:any
 

  constructor( private http:HttpClient) { }

  ngOnInit(): void {
//    const obs=new Observable((observer) => { 
//       observer.next(1)
//       observer.next(3)
//       observer.next(23); 
//       observer.next(25)
//       observer.next(5)
//       observer.next(10); 
//     }).pipe(
    
//  tap((data:any) => console.log('tap ',data)),     //tap
//      filter(data => data > 2),                        //filter
//      tap(data => console.log('filter '+data)),        //tap
//      map((val) => { return val as number * 2 }),      //map
//      tap(data => console.log('final'+data)),  
     
//     )
//     obs.subscribe((item)=>{console.log("h",item)})
  
 this.apiResp()
  

  }
  clickFunc(){
    this.isClicked=true
    // let abc ={
    //   name:'Mohd Ahtesham',
    //   con:'97655'
    // }
    // this.onj=abc

  }
  apiResp(){
    const formData = new FormData()
    formData.append("admin_id",'137')
     let res = this.http.post('https://test.negbuy.com/api/admin_seller_list',formData)
    .subscribe((item)=>{
      console.log(item)
     })
    // this.apiRes=res
    console.log(res)
    
   }

}
