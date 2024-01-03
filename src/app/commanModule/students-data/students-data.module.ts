import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsDataRoutingModule } from './students-data-routing.module';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsDataRoutingModule
  ]
})
export class StudentsDataModule { }
