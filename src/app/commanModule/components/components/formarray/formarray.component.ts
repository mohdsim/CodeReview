import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent implements OnInit {
  
  givenString:string="Mohd Ahtesham"
  myForm:any
  currentdata:any = new Date()

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    console.log("test-->",this.currentdata)
    // step 1
    this.myForm=this.fb.group({
      fName:[''],
      lName:[''],
      hobbies:this.fb.array([])
    })

   
  }
  // step -2
  get hobbies():FormArray{
    return this.myForm.get('hobbies') as FormArray
  }

  // step-3
  addHobbies(){
    this.hobbies.push(
      this.fb.group({
       abc_:['']
      })
    )
  }

  //step-4
  removeHobbies(index:number){
    this.hobbies.removeAt(index)
  }

  submitHobbies(){
    console.log("val-->",this.myForm.value)
  }

}
