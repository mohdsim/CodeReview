//import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true,
    },
  ],
})

export class DatePickerComponent implements OnInit {
  @Input() placeholder: string = ""
  @Input() fieldLabel : string =""
  @Input() minStartDate = moment().toDate();
  @Output() onchangeDatePickerValue = new EventEmitter<any>();

  inputValue: any;

  OnChange: any = () => { };
  OnTouch: any = () => { };

  constructor() { }
  ngOnInit(): void { }

  writeValue(value: any): void {
    this.inputValue = value;
    if (value) {
      let date = moment(value).format("DD/MM/YYYY");
      this.inputValue = moment(value, 'DD/MM/YYYY').toDate();
      this.OnChange(moment(this.inputValue).format("DD/MM/YYYY"));
    }
  }
  ngOnChanges() {
    if (this.minStartDate) {
      this.minStartDate = moment(this.minStartDate, 'DD/MM/YYYY').toDate();
    }
  }
  registerOnChange(fun: any): void {
    this.OnChange = fun;
  }
  registerOnTouched(fun: any): void {
    this.OnTouch = fun;
  }
  setDisabledState?(isDisabled: boolean): void { }

  selectionChange(item: any) {
    let date = moment(item.value).format("DD/MM/YYYY");
    console.log('datedate', date);
    this.OnChange(date);
    this.onchangeDatePickerValue.emit(date);
  }
}



