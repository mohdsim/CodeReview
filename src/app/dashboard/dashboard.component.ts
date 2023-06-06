import { Component, OnInit } from '@angular/core';
//import {Component, inject} from '@angular/core';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import * as moment from 'moment';

//import 'moment/locale/pt-br';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit():void {
	setTimeout(abc,5000)
	
	function abc(){
		console.log("hi i am setTimeOut");
		
	}
     
//const moment = require('moment');

let nowMoment = moment.utc();

console.log(
	"Current Moment is:", nowMoment.toString()
)
console.log(
	"Current Hours:", nowMoment.hours()
)
console.log(
	"Current Minutes:", nowMoment.minutes()
)

// Set the Time to display in the local timezone
nowMoment.local()

console.log(
	"Current Moment is:", nowMoment.toString()
)
console.log(
	"Current Hours:", nowMoment.hours()
)
console.log(
	"Current Minutes:", nowMoment.minutes()
)


                                                

}}
