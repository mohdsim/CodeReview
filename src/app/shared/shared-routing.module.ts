import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { GlobleTableComponent } from '../globle-table/globle-table.component';
import { PrintComponent } from './comman-component/print/print.component';
import { GlobleTableComponent } from './comman-component/globle-table/globle-table.component';
import { DatePickerComponent } from './comman-component/date-picker/date-picker.component';

const routes: Routes = [
  {
    path:'globleTableData',component:GlobleTableComponent
  },
  {
    path:'print',component:PrintComponent
  },
  {
    path:'datepicker',component:DatePickerComponent
  },
  // {
  //   path:'',component:GlobleTableComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
