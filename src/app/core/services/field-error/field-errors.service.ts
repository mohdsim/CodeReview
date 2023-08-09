import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldErrorsService {
  myForm:any

  constructor() { }
  fieldValidators(myForm?:any){
    console.log("--------------------->",myForm)
    if(myForm){
      console.log('i am in else part in Field Error Service ', this.myForm);
      let key = Object.keys(this.myForm.controls);
      console.log('The value of key :', key);
      key.filter((data) => {
        console.log('data', data);
        let control = this.myForm.controls[data];
        console.log('control_check', control);
        if (control.error != null) {
          control.markAsTouched();
        }
        return false;
      });


    }

  }


}
