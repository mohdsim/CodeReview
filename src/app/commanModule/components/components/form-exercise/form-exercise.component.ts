import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-exercise',
  templateUrl: './form-exercise.component.html',
  styleUrls: ['./form-exercise.component.css']
})
export class FormExerciseComponent implements OnInit {
  //https://www.youtube.com/watch?v=-8pJcRK1ayI --first priorty
  //https://www.youtube.com/watch?v=7fjpC1gHkeQ
 // https://www.youtube.com/watch?v=A7yd78pP39o for Form Array
  myForm:any

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm()
  }
  buildForm(){
    this.myForm=this.fb.group({
      checkFormVtrl1:[''],
      checkFormVtr2:[''],
      checkFormVtr3:[''],
     // 2  define author controle
      auther:this.fb.array([this.getAutherControl()])
    })}


  // 1 -  Get Form Array Controle or All form array control define here in this method
 getAutherControl():FormGroup{
    return this.fb.group({
      first_Name:'',
      last_Name:'',
    })}

  // 3. get auther controle for looping in  html  file from the main form
  //public 
  get auther():FormArray{
      return this.myForm.get('auther') as FormArray
    }

   // pushing multiple control into the auther control form array
    addMore(){
      this.auther.push(this.getAutherControl())
    }

    removeAuther(index:any){
      this.auther.removeAt(index)
    }

 //submitting the Form
  onSave(){
    this.myForm.value
    console.log(" check Value->",this.myForm.value)
  }

}
