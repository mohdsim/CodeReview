import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DigitOnlyDirective } from './directive/digit-only.directive';
import { TwoDigitCommanDirective } from './directive/two-digit-comman.directive';


@NgModule({
  declarations: [
    DigitOnlyDirective,
    TwoDigitCommanDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
