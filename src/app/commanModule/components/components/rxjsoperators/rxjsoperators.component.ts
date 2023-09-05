import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, map, pluck } from 'rxjs';

@Component({
  selector: 'app-rxjsoperators',
  templateUrl: './rxjsoperators.component.html',
  styleUrls: ['./rxjsoperators.component.css']
})
export class RxjsoperatorsComponent implements OnInit {
  source = from([1, 2, 3, 4, 5]);
 sources = from([
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 }
  ]);
  
  

  constructor() { }

  ngOnInit(): void {
    this.source.pipe(map((val:any)=>{ return val *13 }),filter((val:any)=>{return val % 2 == 0 })).subscribe((res)=>{console.log("res---->",res)})
    //
    console.log(" source---->",)

    this.sources.pipe(
      pluck('age')
    ).subscribe(result => console.log("abc ",result));
    
    //this.source.pipe
  }

}
