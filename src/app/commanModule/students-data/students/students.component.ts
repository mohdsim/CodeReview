import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

    classStudent:any=[
    {class:'Students',no:0}, {class:'Class1', no:1},
    {class:'Class2', no:2},  {class:'Class3', no:3},
    {class:'Class4', no:4},  {class:'Class5', no:5},
    {class:'Class6', no:6},  {class:'Class7', no:7},
    {class:'Class8', no:8},  {class:'Class9', no:9},
    {class:'Class10',no:10}, {class:'Class11', no:11},
    {class:'Class12', no:12}
  ]

  constructor(){ }

  ngOnInit(): void {
  }

}
