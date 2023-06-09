import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DigitOnlyDirective } from './directive/digit-only.directive';
import { TwoDigitCommanDirective } from './directive/two-digit-comman.directive';
import { GlobleActionButtonComponent } from './comman-component/globle-action-button/globle-action-button.component';
import { GlobleFieldErrorComponent } from './comman-component/globle-field-error/globle-field-error.component';
import { GlobleTableComponent } from './comman-component/globle-table/globle-table.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    DigitOnlyDirective,
    TwoDigitCommanDirective,
    GlobleActionButtonComponent,
    GlobleFieldErrorComponent,
    GlobleTableComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule
  ]
})
export class SharedModule { }
