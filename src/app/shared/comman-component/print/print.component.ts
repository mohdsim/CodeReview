import { Component, OnInit } from '@angular/core';
import {  ViewChild, ElementRef } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import jsPDF from 'jspdf';
declare var require: any;
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
 // For Refrence https://www.elite-corner.com/2022/06/how-to-convert-html-to-pdf-in-angular-application.html
 @ViewChild('abc') pdfTable!: ElementRef;
  
  public exportPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }
   
 constructor(
  
  ) { }

  ngOnInit(): void {
    // RxJS v6+


const sub = new AsyncSubject();

sub.subscribe(console.log);

sub.next(123);
sub.next(124)
sub.next(125)
sub.subscribe(console.log);

// sub.next(456); //nothing logged
sub.complete(); //456, 456 logged by both subscribers
  }
  
  
  
  
  



 

  
  

   


  



 



}




