import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinMaxDateComponent } from './min-max-date/min-max-date.component';
import { FormExerciseComponent } from './form-exercise/form-exercise.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { RxjsoperatorsComponent } from './rxjsoperators/rxjsoperators.component';
import { StudentsComponent } from './students/students.component';
import { FormarrayComponent } from './formarray/formarray.component';
import { GenrateExcelComponent } from './genrate-excel/genrate-excel.component';
//import { RxjsoperatorsComponent } from '../rxjsoperators/rxjsoperators.component';

const routes: Routes = [
  {
    path:'min-max-Date',component:MinMaxDateComponent
  },
  {
    path:'form',component:FormExerciseComponent
  },
  {path:'form-array',component:FormarrayComponent},
  {
    path:'javascript-exercise',component:JavascriptComponent
  },
  {
    path:'rxjs-Operators',component:RxjsoperatorsComponent
  },
  {
    path:'student-list',component:StudentsComponent
  },

  {
    path:'genrate-excel',component:GenrateExcelComponent
  }


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
