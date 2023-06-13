import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModuleRoutingModule } from './core-module-routing.module';
import { ButtonComponent } from './button/button.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    CoreModuleRoutingModule,
    MaterialModule
  ],
  exports:[ButtonComponent]
})
export class CoreModuleModule { }
