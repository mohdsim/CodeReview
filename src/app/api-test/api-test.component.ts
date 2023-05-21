import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css']
})
export class ApiTestComponent implements OnInit {

  constructor( private http:HttpClient) { }

  ngOnInit(): void {
    //  let res =this.http.get('https://jsonplaceholder.typicode.com/posts')
   this.apiResp()
  

  }
  apiResp(){
    const formData = new FormData()
    formData.append("admin_id",'137')
    
     return this.http.post('https://test.negbuy.com/api/admin_seller_list',formData).subscribe((item)=>{
      console.log(item)
     })
    
   }

}
