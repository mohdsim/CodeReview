import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MinMaxDateComponent } from './min-max-date/min-max-date.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormExerciseComponent } from './form-exercise/form-exercise.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { MaterialModule } from 'src/app/material/material.module';
//import { MinMaxDateComponent } from './min-max-date/min-max-date.component';

const components=[
  //MinMaxDateComponent

]


@NgModule({
   declarations: [
    //...components
  
    MinMaxDateComponent,
    FormExerciseComponent,
    JavascriptComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  // declarations: [
 
  // ],
  // exports:[...components]
})
export class ComponentsModule { }
