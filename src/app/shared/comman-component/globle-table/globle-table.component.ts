// import { Component, OnInit } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-globle-table',
  templateUrl: './globle-table.component.html',
  styleUrls: ['./globle-table.component.css']
})
// export class GlobleTableComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class GlobleTableComponent implements OnInit {
  @ViewChild('empTbSort') empTbSort !: MatSort;
  @ViewChild('paginator') paginator !:MatPaginator;
  @Input() isMenu:boolean=false
  @Input() menuOption:string[]=['menuname?']
  @Input() menuColumnId:string=''
  @Input() columns:any;
  @Input() dataset:any []= []
  @Input() tableFormat:any []=[]
 
  dataSource :MatTableDataSource<any> = new MatTableDataSource;
  @Output() tableActions:EventEmitter<any> = new EventEmitter<any>()
  @Output() tableRowActions:EventEmitter<any> = new EventEmitter<any>()
 // @Output() menuAction: EventEmitter = new EventEmitter
  displayedColumns:any
  columnsToDisplay:any;
  status: any;
 // dataSource:any=[]
  
  
 
  
 

  constructor() { 
   
  }

  ngOnInit(): void {
    this.displayedColumns=this.columns
    this.columnsToDisplay=this.columns;
    this.dataSource= new MatTableDataSource(this.dataset)
    console.log("this.displayedColumns",this.displayedColumns)
    console.log(" this.columnsToDisplay",this.columnsToDisplay)
    console.log("this.dataset",this.dataset)
    
      // set checkbox columny
     
     // this.displayedColumns.push("select");
    
      // set table columns
      //this.displayedColumns = this.displayedColumns?.push(this.columns.map((x:any )=> x.columnDef));    // pre-fix static
      
      // add action column
      // this.displayedColumns.push("action");
      // this.dataSource = new MatTableDataSource<any>(this.dataset);
      
      // set pagination
     // this.dataSource.paginator = this.paginator;
   
  }
  handleOnAction(){
    this.tableActions.emit()
  }
  handleOnTableRowAction(){
    this.tableRowActions.emit()
  }
  search(event:any){
    this.dataSource.filter = event.target.value.trim().toLowerCase();
  }
  ngAfterViewInit() {    
    this.dataSource.sort = this.empTbSort;
    this.dataSource.paginator = this.paginator;
}
  
  

}
