import { Component, Input, OnInit, Output ,EventEmitter, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [

    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
 ],
})
export class DropdownComponent implements OnInit,ControlValueAccessor {
  @Input() Options:any []=[]
  @Input() formControlName:any
  @Output() action = new EventEmitter<any>()
  inputValue: any;
  OnChange: any = () => { };
  OnTouch: any = () => { };

  constructor() {
   }
  writeValue(value: any): void {
    this.inputValue = value;
  }
  registerOnChange(fun: any): void {
    this.OnChange = fun;
  }
  registerOnTouched(fun: any): void {
    this.OnTouch = fun;
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }
  onSelect(e:any){
      this.inputValue = e;
      this.OnChange(this.inputValue);
      this.action.emit(e)
  }

  ngOnInit(): void {
  }

}
