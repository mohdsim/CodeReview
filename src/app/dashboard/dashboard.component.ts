import { Component, OnInit } from '@angular/core';
//import {Component, inject} from '@angular/core';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormArray, FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import * as moment from 'moment';
import { MatCardTitleGroup } from '@angular/material/card';
import { Router } from '@angular/router';
import { of } from 'rxjs';  
import { tap, map } from 'rxjs/operators';  
import { compareTwoDate } from '../core/constants/app.constant';
  
enum Days{
	Monday,Tuesday,Wednesday,Thursday,Friday,Saturday
}



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	myForm:any
	promoSetupForm:any;
	
	// columns:any=[]
	// data:any[]=[]
	desizeredMenuOption=['check1','check2','check3','check4']
	// columns=['name', 'weight', 'symbol', 'position']
	columns=['name', 'weight', 'symbol', 'status']
	data=[	
		{name: 'Hydrogen', weight: 1.0079, symbol: 'H', status:true, id:1},
		{name: 'Hydrogen', weight: 1.0079, symbol: 'H', status:false, id:10},
		{name: 'Hydrogen', weight: 1.0079, symbol: 'H', status:true,  id:11},
		{name: 'Hydrogen', weight: 1.0079, symbol: 'H', status:false, id:12},
	// {position: 1, name: 'Hydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H',id:1},
	// {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
	// {position: 3, name: 'Aht', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	// {position: 4, name: 'Bcd', weight: 4.0026, symbol: 'He'},
	// {position: 5, name: 'Cydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	// {position: 6, name: 'Celium', weight: 4.0026, symbol: 'He'},
	// {position: 7, name: 'Hydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	// {position: 8, name: 'Helium', weight: 4.0026, symbol: 'He'},
	// {position: 9, name: 'Aht', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	// {position: 10, name: 'Bcd', weight: 4.0026, symbol: 'He'},
	// {position: 11, name: 'Cydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	// {position: 12, name: 'Celium', weight: 4.0026, symbol: 'He'},
	// {position: 13, name: 'Hydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	// {position: 14, name: 'Helium', weight: 4.0026, symbol: 'He'},
	// {position: 15, name: 'Aht', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	// {position: 16, name: 'Bcd', weight: 4.0026, symbol: 'He'},
	// {position: 17, name: 'Cydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	// {position: 18, name: 'Celium', weight: 4.0026, symbol: 'He'},
	// {position: 19, name: 'Hydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	// {position: 20, name: 'Helium', weight: 4.0026, symbol: 'He'},
	// {position: 21, name: 'Aht', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	// {position: 22, name: 'Bcd', weight: 4.0026, symbol: 'He'},
	// {position: 23, name: 'Cydrogen', lastN:'gen',age:'14', weight: 1.0079, symbol: 'H'},
	// {position: 24, name: 'Celium', weight: 4.0026, symbol: 'He'},
	
]
	stDate: any;
	
	


  

  constructor(
	private snackBar: MatSnackBar,
	          private fb:FormBuilder,
			  private router:Router
			  ) {
	
  }

  ngOnInit():void {
	this.myRxjsOperator_Exercise()

	// **********************************
  this.myForm= this.fb.group({
		abc:[''],
		auther:this.fb.array([
		this.getAutherControl()

		])

	})
	
	
	//**************************************** Regarding Moment js 
//const moment = require('moment');

// let nowMoment = moment.utc();

// console.log(
// 	"Current Moment is:", nowMoment.toString()
// )
// console.log(
// 	"Current Hours:", nowMoment.hours()
// )
// console.log(
// 	"Current Minutes:", nowMoment.minutes()
// )

// Set the Time to display in the local timezone
// nowMoment.local()

// console.log(
// 	"Current Moment is:", nowMoment.toString()
// )
// console.log(
// 	"Current Hours:", nowMoment.hours()
// )
// console.log(
// 	"Current Minutes:", nowMoment.minutes()
// )
//****************************************************

                                                

}
private getAutherControl():FormGroup{
	return this.fb.group({
		first_Name:'',
		
	})

}
public get auther(){
    return <FormArray>this.myForm.get('auther')
  }
  addMore(){
    this.auther.push(this.getAutherControl())
  }
// private getAutherControl():FormGroup {
//     return this.formBuilder.group({
//        fulltName:''
//      })
//   }
myFunc(){
	console.log("hi i am")
}
actions(){
	this.router.navigateByUrl('reactiveForm')
	

}
actionOntableRow(){
	console.log("i am action On Row");
}
receiveData(ev:any){
	console.log(ev);
	alert("hi")

}

sub(){
	console.log("valCheck-------->>>>",this.myForm.value)
}
 myRxjsOperator_Exercise(){
	const source = of(1, 2, 3, 4, 5);
	const example = source.pipe(  
		tap(val => console.log(`BEFORE MAP: ${val}`)),  
		map(val => val + 10),  
		tap(val => console.log(`AFTER MAP: ${val}`))  
	  );  
	  //'tap' does not transform values  
	  const subscribe = example.subscribe(val => console.log(val));  
 }
 buildFrom() {
    this.promoSetupForm = this.fb.group({
      active: [true],
      amount: ['', [Validators.required]],
      effectiveEndDate: ['', [Validators.required]],
      effectiveStartDate: ['', [Validators.required]],
      id: [0],
      promoCode: ['', [Validators.required]],
      promoDescription: [''],
    });
  }

 changeStDate(evn:any) {
    this.stDate = evn;
    let stValue = this.promoSetupForm?.value?.effectiveStartDate;
    let endValue = this.promoSetupForm?.value?.effectiveEndDate;
    if (stValue && endValue) {
      const isValidDate = compareTwoDate(stValue, endValue);
      if (!isValidDate) {
        this.promoSetupForm.patchValue({
          effectiveEndDate: null
        })
      }
    }
  }

  dateFormatForPatch(date:any) {
    console.log("date", date);
    if (date != null) {
      return moment(date, 'DD/MM/YYYY').toDate()
    } else {
      return null;
    }
  }
}
