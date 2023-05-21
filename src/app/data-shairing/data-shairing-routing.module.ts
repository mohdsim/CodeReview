import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommanComponent } from './comman/comman.component';

const routes: Routes = [
  {
    path:'',component:CommanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataShairingRoutingModule { }
