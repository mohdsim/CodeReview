// // import { Component, OnInit } from '@angular/core';

// // @Component({
// //   selector: 'app-input-field',
// //   templateUrl: './input-field.component.html',
// //   styleUrls: ['./input-field.component.css']
// // })
// // export class InputFieldComponent implements OnInit {

// //   constructor() { }

// //   ngOnInit(): void {
// //   }

// // }
// import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';

// import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';






// @Component({

//   selector: 'app-input-field',

//   templateUrl: './input-field.component.html',

//   styleUrls: ['./input-field.component.css']

//   // providers: [

//   //   {

//   //     provide: NG_VALUE_ACCESSOR,

//   //     useExisting: forwardRef(() => InputComponent),

//   //     multi: true,

//   //   },

   

//   // ],

// })

// export class InputFieldComponent implements OnInit {
//   @Input() placeholder: string = ""
//   @Input() fieldLabel:string ='a'
//   @Input() subLabel: string=''
//   @Input() inputType: string='text';
//   @Input() value:any;
//   @Input() mandetory:boolean = false;
//   @Input() readonly=false;
//   @Input() onlyDigit=false;
//   @Output() onchangeInputValue = new EventEmitter<any>();
//   inputValue: any;
//   OnChange: any = () => { };
//   OnTouch: any = () => { };
//   constructor() { }

//    ngOnInit(): void { }

//    writeValue(value: any): void {
//       this.inputValue = value;

//   }

//   registerOnChange(fun: any): void {

//     this.OnChange = fun;

//   }

//   registerOnTouched(fun: any): void {
//       this.OnTouch = fun;

//   }

//   setDisabledState?(isDisabled: boolean): void { }




//   inputchange(item:any) {
//       this.inputValue = item;
//       this.OnChange(this.inputValue);
//       this.onchangeInputValue.emit(item.value);

//   }

// }

import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



@Component({
  
      selector: 'app-input-field',
      templateUrl: './input-field.component.html',
      styleUrls: ['./input-field.component.css'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFieldComponent,
      multi: true,
    },
    
  ],
})
export class InputFieldComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = ""
  @Input() fieldLabel:any
  @Input() subLabel:any
  @Input() value:any
  @Input() inputType: string='text';
  @Input() mandetory: boolean = false;
  @Input() readonly=false;
  @Input() onlyDigit=false;
  @Output() onchangeInputValue = new EventEmitter<any>();

  inputValue: any;

  OnChange: any = () => { };
  OnTouch: any = () => { };

  constructor() { }
  ngOnInit(): void { }

  writeValue(value: any): void {
    this.inputValue = value;
  }
  registerOnChange(fun: any): void {
    this.OnChange = fun;
  }
  registerOnTouched(fun: any): void {
    this.OnTouch = fun;
  }
  setDisabledState?(isDisabled: boolean): void { }

  inputchange(item:any) {
    this.inputValue = item.value;
    this.OnChange(this.inputValue);
    this.OnTouch()
    this.onchangeInputValue.emit(item.value);
  }
}






