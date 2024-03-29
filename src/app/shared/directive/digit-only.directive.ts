import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[appDigitOnly]'
})

// /^\d*\.{2}?\d*$/
// /^\d*\.?\d{2}*$/

//  const isDigit =  /^\d*\.?\d{2}*$/.test(event.key);


export class DigitOnlyDirective {
  constructor(private el: ElementRef) { }
  @HostListener('input',['$event'])
   onInputChange(event:any) {
    // const initalValue = this.el.nativeElement.value;
     console.log(event)
    const initalValue = this.el.nativeElement.value;
    console.log(initalValue)
    //  this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
     if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
  
     }
 
   }
}
// export class DigitOnlyDirective  implements ControlValueAccessor {
//   private onChange: ((val: string) => void) | undefined;
//   private onTouched: (() => void) | undefined;
//   private value: string | undefined;

//   constructor(
//     private elementRef: ElementRef,
//     private renderer: Renderer2
//   ) {
//   }

//   @HostListener('input', ['$event.target.value'])
//   onInputChange(value: string) {
//     const filteredValue: string = filterValue(value);
//     this.updateTextInput(filteredValue, this.value !== filteredValue);
//   }

//   @HostListener('blur')
//   onBlur() {
//     this.onTouched();
//   }

//   private updateTextInput(value: string, propagateChange: boolean) {
//     this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
//     if (propagateChange) {
//       this.onChange(value);
//     }
//     this.value = value;
//   }

//   // ControlValueAccessor Interface
//   registerOnChange(fn: any): void {
//     this.onChange = fn;
//   }

//   registerOnTouched(fn: any): void {
//     this.onTouched = fn;
//   }

//   setDisabledState(isDisabled: boolean): void {
//     this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
//   }

//   writeValue(value: any): void {
//     value = value ? String(value) : '';
//     this.updateTextInput(value, false);
//   }
// }

// function filterValue(value:any): string {
//   return value.replace(/[^0-9]*/g, '');
// }
