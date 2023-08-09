import { Component, OnInit } from '@angular/core';
import {  ViewChild, ElementRef } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import jsPDF from 'jspdf';
declare var require: any;
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { FormBuilder, Validators } from '@angular/forms';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  class1:any=[
   { S_Name:"Ankit",S_Class:1,S_Father:'A', S_Mother:'Aa',S_Contact:'0198743785'},
   { S_Name:"Bhanu",S_Class:1,S_Father:'Sanjay', S_Mother:'Bb',S_Contact:'0198743788'},
   { S_Name:"Anshuman",S_Class:1,S_Father:'C', S_Mother:'Chadni',S_Contact:'0198743785'},
   { S_Name:"Ankit",S_Class:1,S_Father:'A', S_Mother:'Aa',S_Contact:'0198743785'},
   { S_Name:"Bhanu",S_Class:1,S_Father:'Jitendar', S_Mother:'Bb',S_Contact:'0198743788'},
   { S_Name:"Anshuman",S_Class:1,S_Father:'C', S_Mother:'Chadni',S_Contact:'0198743785'}
   
   
  ]
  class2:any=[
    { S_Name:"Ankit",S_Class:2,S_Father:'A', S_Mother:'Aa',S_Contact:'0298743785'},
    { S_Name:"Bhanu",S_Class:2,S_Father:'Sanjay', S_Mother:'Bb',S_Contact:'0298743788'},
    { S_Name:"Anshuman",S_Class:2,S_Father:'C', S_Mother:'Chadni',S_Contact:'0298743785'},
    { S_Name:"Ankit",S_Class:2,S_Father:'A', S_Mother:'Aa',S_Contact:'0298743785'},
    { S_Name:"Bhanu",S_Class:2,S_Father:'Jitendar', S_Mother:'Bb',S_Contact:'0298743788'},
    { S_Name:"Anshuman",S_Class:2,S_Father:'C', S_Mother:'Chadni',S_Contact:'0298743785'}
    
    
   ]
   class3:any=[
    { S_Name:"Ankit",S_Class:3,S_Father:'A', S_Mother:'Aa',S_Contact:'0398743785'},
    { S_Name:"Bhanu",S_Class:3,S_Father:'Sanjay', S_Mother:'Bb',S_Contact:'0398743788'},
    { S_Name:"Anshuman",S_Class:3,S_Father:'C', S_Mother:'Chadni',S_Contact:'0398743785'},
    { S_Name:"Ankit",S_Class:3,S_Father:'A', S_Mother:'Aa',S_Contact:'0398743785'},
    { S_Name:"Bhanu",S_Class:3,S_Father:'Jitendar', S_Mother:'Bb',S_Contact:'0398743788'},
    { S_Name:"Anshuman",S_Class:3,S_Father:'C', S_Mother:'Chadni',S_Contact:'0398743785'}
    
    
   ]
   class4:any=[
    { S_Name:"Ankit",S_Class:4,S_Father:'A', S_Mother:'Aa',S_Contact:'0498744785'},
    { S_Name:"Bhanu",S_Class:4,S_Father:'Sanjay', S_Mother:'Bb',S_Contact:'0498744788'},
    { S_Name:"Anshuman",S_Class:4,S_Father:'C', S_Mother:'Chadni',S_Contact:'0498744785'},
    { S_Name:"Ankit",S_Class:4,S_Father:'A', S_Mother:'Aa',S_Contact:'0498744785'},
    { S_Name:"Bhanu",S_Class:4,S_Father:'Jitendar', S_Mother:'Bb',S_Contact:'0498744788'},
    { S_Name:"Anshuman",S_Class:4,S_Father:'C', S_Mother:'Chadni',S_Contact:'0498743785'}
    
    
   ]
   teachers:any=[
    {
      Name:'Amit Kumar',
      Contact:'9876543567',
      Address:'Safron Building ,B-Wing,402,400612',

    },
    {
      Name:'Danish',
      Contact:'98765677',
      Address:'Dhananjay Building ,B-Wing,202,400612',
      
    },
    {
      Name:'Sudha',
      Contact:'98765677',
      Address:'Dhananjay Building ,B-Wing,202,400612',
      
    },
    {
      Name:'Taha',
      Contact:'98765677',
      Address:'Dhananjay Building ,B-Wing,202,400612',
      
    },
    {
      Name:'Deepak',
      Contact:'98765677',
      Address:'Dhananjay Building ,B-Wing,202,400612',
      
    },
    {
      Name:'Sandeep',
      Contact:'98765677',
      Address:'Dhananjay Building ,B-Wing,202,400612',
      
    },
    {
      Name:'Surendr',
      Contact:'98765677',
      Address:'Dhananjay Building ,B-Wing,202,400612',
      
    },
    
   ]
   sheduled:any=[
    { 
      t_id:'abc1',
      sheduled:[
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''}]
    },
    { 
      t_id:'abc2',
      sheduled:[
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''}]
    },
    { 
      t_id:'abc2',
      sheduled:[
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''}]
    },
    { 
      t_id:'abc4',
      sheduled:[
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''},
       {class:1,period:'1',subject:'Hindi',classTime:''}]
    }

   ]
  myForm:any

 // For Refrence https://www.elite-corner.com/2022/06/how-to-convert-html-to-pdf-in-angular-application.html
 @ViewChild('abc') pdfTable!: ElementRef;
  
  public exportPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }
   
 constructor(
  private formBuilder:FormBuilder
  
  ) { }

  ngOnInit(): void {
   


const sub = new AsyncSubject();

sub.subscribe(console.log);

sub.next(123);
sub.next(124)
sub.next(125)
sub.subscribe(console.log);

// sub.next(456); //nothing logged
sub.complete(); //456, 456 logged by both subscribers
  }

  buildForm(){
    this.myForm=this.formBuilder.group({
        S_token:['',[Validators.required]],
        S_Exit:['',[Validators.required]],
        S_Name:['',[Validators.required]],
        S_Class:['',[Validators.required]],
        S_Father:['',[Validators.required]],
        S_Mother:['',[Validators.required]],
        S_Contact:['',[Validators.required]],
        S_Id:[],
        S_P_Id:[]
    })

  }

  submitForm(){

  }
  
  
  
  
  



 

  
  

   


  



 



}




