import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTwoDigitComman]'
})
// export class TwoDigitCommanDirective {
//   private regex: RegExp = new RegExp(/^-?\d*\.?\d{0,2}$/g);
  

//   constructor() { }

// }
export class TwoDigitCommanDirective {
  regex: RegExp = new RegExp(/^-?\d*\.?\d{0,2}$/g);
  constructor(private el: ElementRef) { }
  @HostListener('input',['$event'])
   onInputChange(event:any) {
     console.log(event)
    const initalValue = this.el.nativeElement.value;
   let res= initalValue.replace(/\B(?=(\d{3})+(?!\d{2}))/g, ",")
   console.log("check number",res);
    // console.log(initalValue)
     this.el.nativeElement.value = res
    
     if ( res !== this.el.nativeElement.value) {
       event.stopPropagation();
  
     }
    
   
   }
}

