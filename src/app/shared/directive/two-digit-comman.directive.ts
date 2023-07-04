import { Directive } from '@angular/core';

@Directive({
  selector: '[appTwoDigitComman]'
})
export class TwoDigitCommanDirective {
  private regex: RegExp = new RegExp(/^-?\d*\.?\d{0,2}$/g);
  

  constructor() { }

}
