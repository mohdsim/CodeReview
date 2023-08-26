import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  tableArray:any=[
    {
        "studentId": "1",
        "studentName": "Mohd",
        "studentClass": "1",
        "studentContact": "7860632949"
    },
    {
        "studentId": "12",
        "studentName": "Mohd Taha",
        "studentClass": "1",
        "studentContact": "7860632940"
    },
    {
        "studentId": "13",
        "studentName": "Deepak",
        "studentClass": "3",
        "studentContact": "7860632944"
    },
    {
        "studentId": "14",
        "studentName": "Raju",
        "studentClass": "3",
        "studentContact": "7860632946"
    },
    {
        "studentId": "15",
        "studentName": "Raju",
        "studentClass": "5",
        "studentContact": "7860632948"
    },
    {
        "studentId": "5",
        "studentName": "Sanjay",
        "studentClass": "5",
        "studentContact": "7860632968"
    }
]
  myForm:any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm()
  }

  handleOnSearch(event:any){
   const searchVal=this.tableArray.includes((obj:any)=>{if(obj.studentName==event){return obj}})
  //  console.log("searchVal",searchVal)
    console.log("event",event)
    this.tableArray=searchVal


  }
  buildForm(){
    this.myForm=this.fb.group({
      studentId:[''],
      studentName:[''],
      studentClass:[''],
      studentContact:['']
    })

  }
  
  onSave(){
    console.log(this.tableArray)
    this.tableArray.push(this.myForm.value)}

}
