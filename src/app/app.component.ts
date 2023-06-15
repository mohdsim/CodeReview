import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  panelOpenState = false;
  title = 'sideNav';
 res= setTimeout(() => {
  this.myLoderFunc()
  },4000)


  

  constructor(private http: HttpClient) { }
  ngOnInit() {
   this.myLoderFunc()
    
  }

  myLoderFunc() {
     return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
     .subscribe(res=>console.log(res))
  }
}
