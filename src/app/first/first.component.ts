import { Component, Input, OnInit } from '@angular/core';
import { userInfo } from '../interfaces';
  
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  isClicked:boolean=false
  control:any
  

  abj:userInfo[]=
  [
    {
       name:"Mohd",
       email:"abc@gmail.com",
       contact:987656,
       indian:true
      
    },
    {
      name:"Mohd",
      email:"abc@gmail.com",
      contact:987656,
      indian:true
     
   },
   {
    name:"Mohd",
    email:"abc@gmail.com",
    contact:987656,
    indian:true
   
 },
 {
  name:"Mohd",
  email:"abc@gmail.com",
  contact:987656,
  indian:true,
  
 
}
]
abk:userInfo ={
  name:"Mohd",
  email:"abc@gmail.com",
  contact:987656,
  indian:true
 
}

  constructor() { }

  ngOnInit(): void {
    
  }
  addForm(){
    let obj ={
      name:'a',
      contact:null,
      address:null
    }
    this.control=obj
    this.isClicked=true
  }

}
