import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-exercise',
  templateUrl: './form-exercise.component.html',
  styleUrls: ['./form-exercise.component.css']
})
export class FormExerciseComponent implements OnInit {
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
      auther:this.fb.array([
		   this.getAutherControl()
      ])
    })

  }
  //private
 getAutherControl():FormGroup{
    return this.fb.group({
      first_Name:'',
      
    })
  
  }
  //get auther controle
  //public 
  get auther():FormArray{
      // return <FormArray> this.myForm.get('auther')
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
