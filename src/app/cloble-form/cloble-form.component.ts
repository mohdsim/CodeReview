import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CentralizService } from '../core/centraliz.service';

@Component({
  selector: 'app-cloble-form',
  templateUrl: './cloble-form.component.html',
  styleUrls: ['./cloble-form.component.css']
})
export class ClobleFormComponent implements OnInit {
    myForm:any
    objectKey:any[]=[]
    DesizeredControl={} as any
  @Input() receivedControl?:any

  constructor( private fb:FormBuilder , private _centralizService:CentralizService) { }
  ngOnChanges(){
    console.log("hi")
  }

  ngOnInit(): void {
    this.dynamicForm()
   console.log(this.receivedControl)
   console.log(" this.myForm.value", this.myForm.value)
   this._centralizService.formVal.subscribe((item)=>{console.log("formVal",item)})
  }
    dynamicForm(){
      this.objectKey =Object.keys(this.receivedControl)
       this.objectKey.map((item)=>{
        console.log(item)
        this.DesizeredControl[item]=null;
       })
      
     // console.log("in Globle Form objectKey",this.DesizeredControl)
      this.myForm=this.fb.group(this.DesizeredControl)
  
    }

    submit(){
     console.log("Input Value", this.myForm.value)
     this._centralizService.formVal.next(this.myForm.value)
    }
}
