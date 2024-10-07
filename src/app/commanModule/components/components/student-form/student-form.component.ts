import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StudentsComponent } from '../students/students.component';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm:any

  constructor(
    private fb:FormBuilder,
    private dialogRef: MatDialogRef<StudentsComponent>
    
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }

  buildForm(){
    this.studentForm=this.fb.group({
     stId:[null],
     stName:[null,Validators.required],
     stClass:[null],
     stDob:[null],
     stUid:[null],
     stContact:[null],
     stFatherName:[null],
     stMotherName:[null],
     stStatus:[null],
     stAddress:[null]
    })
  }

  submit(){
    console.log('this.studentForm>>>>',this.studentForm)
    this.dialogRef.close(this.studentForm.value);
  }

}
