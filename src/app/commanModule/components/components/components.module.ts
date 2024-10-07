import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { MinMaxDateComponent } from './min-max-date/min-max-date.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormExerciseComponent } from './form-exercise/form-exercise.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { MaterialModule } from 'src/app/material/material.module';
import { RxjsoperatorsComponent } from './rxjsoperators/rxjsoperators.component';
import { StudentsComponent } from './students/students.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { GenrateExcelComponent } from './genrate-excel/genrate-excel.component';
//import { MinMaxDateComponent } from './min-max-date/min-max-date.component';

const components=[
  //MinMaxDateComponent

]


@NgModule({
   declarations: [
    //...components
  
    MinMaxDateComponent,
    FormExerciseComponent,
    JavascriptComponent,
    RxjsoperatorsComponent,
    StudentsComponent,
    StudentFormComponent,
    FormarrayComponent,
    GenrateExcelComponent
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
