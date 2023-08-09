import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../core/services/common.service';
import { FieldErrorsService } from '../core/services/field-error/field-errors.service';
// import { FormArrays } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isError:any
  myForm:any
  submitt: boolean=false;
  constructor( private formBuilder:FormBuilder,private _commanService:CommonService, private _fieldErrorService:FieldErrorsService) { }

  ngOnInit(): void {
    // this.myForm = this.formBuilder.group({
    //   name: ['', [Validators.required]],
    //   email: ['', [Validators.required, Validators.email]],
    //   mob: [ '',[Validators.required,Validators.minLength(10),Validators.maxLength(10),
    //     ],
    //   ],
    this.myForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      email: ['', [Validators.required]],
      mob: [ '',[Validators.required,Validators.minLength(10),Validators.maxLength(10),
        ],
      ],
      
      auther:this.formBuilder.array([
        this.getAutherControl()
      ])
    });
    
    
  }
 public get auther(){
    return <FormArray>this.myForm.get('auther')
  }
 addMore(){
    this.auther.push(this. getAutherControl())
  }
  removeAuther(i:number){
    this.auther.removeAt(i)
  }
  private getAutherControl():FormGroup {
    return this.formBuilder.group({
       fulltName:''
     })
  }



 // openForm() {
    

    // this.myForm.patchValue({
    //   name:'',

    //   email:'',
    //   mob:'',
    //   gender:'',
    //   Dob:'',
    //   country:'',
    //   agree:'',
    // });
    // this.todoInputField = true;
    // this.submitBtn = true;
    // this.updateBtn = false;
    // this.submitBtn = true
 // }

 findMsg(){
  this._fieldErrorService.fieldValidators(this.myForm)
       
 }
  
  submitForm() {
    this.submitt = true;
     console.log(this.myForm.value)
    if (this.myForm.valid) {
      this.submitt = true;
    }
    else {
     this._commanService.showSnackbar('Please fill all the required filelds', null, 3000);
       console.log("check Mohd",this._fieldErrorService.fieldValidators(this.myForm))
     
       this.isError= this.findMsg()
       console.log('i am --->this.isError ', this.isError);
      // let key = Object.keys(this.myForm.controls);
      // console.log('The value of key :', key);
      // key.filter((data) => {
      //   console.log('data', data);
      //   let control = this.myForm.controls[data];
      //   console.log('control_check', control);
      //   if (control.error != null) {
      //     control.markAsTouched();
      //   }
      //   return false;
      // });
    }
   
  }

  get name() {
    return this.myForm.get('name');
  }
  get email() {
    return this.myForm.get('email');
  }
  get mob() {
    return this.myForm.get('mob');
  }

  // *****************************************
 
}
