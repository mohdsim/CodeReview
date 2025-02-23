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
import { ImagesOperationComponent } from './images-operation/images-operation.component';
import { ImageUploadeComponent } from './image-uploade/image-uploade.component';
import { ImageSizeValidationComponent } from './image-size-validation/image-size-validation.component';
import { ImageSizeWithCropeComponent } from './image-size-with-crope/image-size-with-crope.component';
import { ImageSizeWithCropeAndCameraComponent } from './image-size-with-crope-and-camera/image-size-with-crope-and-camera.component';
import { HexaColorPickerComponent } from './hexa-color-picker/hexa-color-picker.component';
//import { ColorPickerModule } from 'ngx-color-picker';
//import { MatColorPickerModule } from '@angular-material-components/color-picker'
//import { MinMaxDateComponent } from './min-max-date/min-max-date.component';
//import { NgxMatColorPickerModule } from '@angular-material-components/color-picker';
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
    GenrateExcelComponent,
    ImagesOperationComponent,
    ImageUploadeComponent,
    ImageSizeValidationComponent,
    ImageSizeWithCropeComponent,
    ImageSizeWithCropeAndCameraComponent,
    HexaColorPickerComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    //ColorPickerModule
   // NgxMatColorPickerModule
    //MatColorPickerModule
  ],
  // declarations: [
 
  // ],
  // exports:[...components]
})
export class ComponentsModule { }
