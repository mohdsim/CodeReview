import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FormArrays } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm:any
  submitt: boolean=false;
  constructor( private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mob: [ '',[Validators.required,Validators.minLength(10),Validators.maxLength(10),
        ],
      ],
      // landLine: this.formBuilder.array({
      //   this.formBuilder.control()
      // })
      // address: this.formBuilder.group({
      //   address1:[''],
      //   address2:[''],
      //   address3:['']
      // }),
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
  
  submitForm() {
    this.submitt = true;
     console.log(this.myForm.value)
    if (this.myForm.valid) {
      this.submitt = true;
    }
    else {
      console.log('i am in else part ', this.myForm);
      let key = Object.keys(this.myForm.controls);
      console.log('The value of key :', key);
      key.filter((data) => {
        console.log('data', data);
        let control = this.myForm.controls[data];
        console.log('control', control);
        if (control.error != null) {
          control.markAsTouched();
        }
        return false;
      });
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
