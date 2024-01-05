import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsDataRoutingModule } from './students-data-routing.module';
import { StudentsComponent } from './students/students.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsDataRoutingModule,
    MaterialModule
  ]
})
export class StudentsDataModule { }
