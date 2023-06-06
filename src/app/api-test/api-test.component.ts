import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, filter, map, of, take, tap } from 'rxjs';
import { sellerApiResp } from '../interfaces';


@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {
  isClicked: boolean = false
  sendRequiredControl = {
    name: null,
    add: null,
    email: null,
    mob: null,
    cont: null
 }
  onj: any
  res: any
  
  apiRes$: Observable<sellerApiResp[]>
 



  constructor(private http: HttpClient) {
   this.apiRes$ = this.res
  }

  ngOnInit(): void {
      //import { of, map } from 'rxjs';

 of(7, 13, 3)
  .pipe(
     map((v) => {
      let a =v + v 
      console.log("map val",a)
      return a
          }),
        
          tap((b)=>{console.log("tap val",b)}),
          
    
   
  ).subscribe((item)=>{console.log("item",item);
  })



  }


  clickFunc() {
    this.isClicked = true

  }
  apiResp(): Observable<sellerApiResp[]> {
    console.log("type of apiResp -->", typeof this.apiResp)
    const formData = new FormData()
    formData.append("admin_id", '137')
    this.res = this.http.post<sellerApiResp[]>('https://test.negbuy.com/api/admin_seller_list', formData)
    return this.apiRes$ = this.res

  }






 
}
