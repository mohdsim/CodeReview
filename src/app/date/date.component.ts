import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
//import * as moment from 'moment';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  currentDate:any

  constructor() { }

  ngOnInit(): void {
    let nowMoment =moment.utc()
    nowMoment.local()
    this.currentDate=nowMoment
    console.log(this.currentDate)
  
  }

}
