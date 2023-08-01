import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  startDate:any
  endDate:any
  myDatePickerForm:any
  // startDate = new FormControl(new Date());
  // endDate = new FormControl(new Date());

  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
    this.buildForm()
   //this.startDate=this.myDatePickerForm.get('startDate').value
  }
 buildForm(){
  // this.myDatePickerForm=this.fb.group({
  //   startDate:["",new Date()],
  //   endDate:["",new Date()]

  // })
  
 }
}
