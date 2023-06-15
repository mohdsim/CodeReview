import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';
import { timeout } from 'rxjs';
import { of, interval } from 'rxjs';
import { mergeMap, map, filter } from 'rxjs/operators';


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
    const val = of(1,2,3,4,5,6,7)
    val.pipe(
      // filter((i)=>{ return i == 50}),
      map((x:any)=>{ return x*10},
     

    ))
   .subscribe((i)=>{console.log(i)})
 


















  

    
  }

  myLoderFunc() {
     return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
     .subscribe(res=>console.log(res))
  }
}
