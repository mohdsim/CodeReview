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
	
	columns:any=[]
	data:any[]=[]
	


  

  constructor(private snackBar: MatSnackBar) {
	this.columns=['name', 'weight', 'symbol', 'position']
	this.data=[	
	{position: 1, name: 'Hydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	{position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
	{position: 3, name: 'Aht', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	{position: 4, name: 'Bcd', weight: 4.0026, symbol: 'He'},
	{position: 5, name: 'Cydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	{position: 6, name: 'Celium', weight: 4.0026, symbol: 'He'},
	{position: 7, name: 'Hydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	{position: 8, name: 'Helium', weight: 4.0026, symbol: 'He'},
	{position: 9, name: 'Aht', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	{position: 10, name: 'Bcd', weight: 4.0026, symbol: 'He'},
	{position: 11, name: 'Cydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	{position: 12, name: 'Celium', weight: 4.0026, symbol: 'He'},
	{position: 13, name: 'Hydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	{position: 14, name: 'Helium', weight: 4.0026, symbol: 'He'},
	{position: 15, name: 'Aht', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	{position: 16, name: 'Bcd', weight: 4.0026, symbol: 'He'},
	{position: 17, name: 'Cydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	{position: 18, name: 'Celium', weight: 4.0026, symbol: 'He'},
	{position: 19, name: 'Hydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	{position: 20, name: 'Helium', weight: 4.0026, symbol: 'He'},
	{position: 21, name: 'Aht', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	{position: 22, name: 'Bcd', weight: 4.0026, symbol: 'He'},
	{position: 23, name: 'Cydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	{position: 24, name: 'Celium', weight: 4.0026, symbol: 'He'},
	
]
	
  }

  ngOnInit():void {
	
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


                                                

}
myFunc(){
	console.log("hi i am")
}
actions(){
	console.log("hi i am Dynamic event")

}

}
