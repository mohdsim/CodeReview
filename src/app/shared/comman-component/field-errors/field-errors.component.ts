import { Component, Input, OnInit } from '@angular/core';
import { FieldErrorsService } from 'src/app/core/services/field-error/field-errors.service';

@Component({
  selector: 'app-field-errors',
  templateUrl: './field-errors.component.html',
  styleUrls: ['./field-errors.component.css']
})
export class FieldErrorsComponent implements OnInit {
  @Input() formGroupName:any
  @Input() formControl:any
  @Input() getErrorMsg:any

  constructor(private _fielderror:FieldErrorsService) { }

  ngOnInit(): void {
    this.getControlError(this.formGroupName,this.formControl)
  }

  // submitForm() {
  //   this.submitt = true;
  //    console.log(this.myForm.value)
  //   if (this.myForm.valid) {
  //     this.submitt = true;
  //   }
  //   else {
  //    this._commanService.showSnackbar('Please fill all the required filelds', null, 3000);
  //   // this._commanService.showSnackbar()
  //     console.log('i am in else part ', this.myForm);
  //     let key = Object.keys(this.myForm.controls);
  //     console.log('The value of key :', key);
  //     key.filter((data) => {
  //       console.log('data', data);
  //       let control = this.myForm.controls[data];
  //       console.log('control_check', control);
  //       if (control.error != null) {
  //         control.markAsTouched();
  //       }
  //       return false;
  //     });
  //   }
   
  // }
  getControlError(formGroupName?:any,formControl?:any){
   return this.formGroupName.get(formControl)

  }
   
  abc(formGroupName?:any){
    this._fielderror.fieldValidators(formGroupName)

  }

}
