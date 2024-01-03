import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from '../components/components/students/students.component';

const routes: Routes = [{
  path:'studentInfo',component:StudentsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsDataRoutingModule { }
