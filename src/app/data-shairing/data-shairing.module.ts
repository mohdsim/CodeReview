import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataShairingRoutingModule } from './data-shairing-routing.module';
import { CommanComponent } from './comman/comman.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';


@NgModule({
  declarations: [
    CommanComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
  
  ],
  imports: [
    CommonModule,
    DataShairingRoutingModule
  ]
})
export class DataShairingModule { }
