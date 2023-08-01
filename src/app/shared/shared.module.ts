import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DigitOnlyDirective } from './directive/digit-only.directive';
import { TwoDigitCommanDirective } from './directive/two-digit-comman.directive';
//import { GlobleActionButtonComponent } from './comman-component/globle-action-button/globle-action-button.component';
import { GlobleFieldErrorComponent } from './comman-component/globle-field-error/globle-field-error.component';
import { GlobleTableComponent } from './comman-component/globle-table/globle-table.component';
import { MaterialModule } from '../material/material.module';
import { PrintComponent } from './comman-component/print/print.component';
import { ImplementSignalComponent } from './comman-component/implement-signal/implement-signal.component';
import { InputFieldComponent } from './comman-component/input-field/input-field.component';
import { ActionButtonComponent } from './comman-component/action-button/action-button.component';
import { DropdownComponent } from './comman-component/dropdown/dropdown.component';
import { DatePickerComponent } from './comman-component/date-picker/date-picker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
const components=[
  GlobleTableComponent,
  PrintComponent,
  ActionButtonComponent,
  DropdownComponent,
  DatePickerComponent,

]

@NgModule({
  declarations: [
    ...components,
    DigitOnlyDirective,
    TwoDigitCommanDirective,
   // GlobleActionButtonComponent,
    GlobleFieldErrorComponent,
    GlobleTableComponent,
    ImplementSignalComponent,
    InputFieldComponent,
   
   
   
    
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  exports:[  ...components]
})
export class SharedModule { }
