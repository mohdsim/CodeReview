import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';

// @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
// @Output() action: EventEmitter<TableButtonAction> = new EventEmitter<TableButtonAction>()
//  @Input() columns: Array<TableColumn>;

// @Input() dataset: Array<any> = [];

// dataSource: MatTableDataSource<any>;
// selection = new SelectionModel<any>(true, []);
// displayedColumns: string[] = [];




@Component({
  selector: 'app-globle-table',
  templateUrl: './globle-table.component.html',
  styleUrls: ['./globle-table.component.css']
})
export class GlobleTableComponent implements OnInit {
  @ViewChild('empTbSort') empTbSort !: MatSort;
  @ViewChild('paginator') paginator !:MatPaginator;
  @Input() columns:any;
 
  @Input() dataset:any []= []
  @Input() tableFormat:any []=[]
  dataSource :MatTableDataSource<any> = new MatTableDataSource;
  @Output() actions:EventEmitter<any> = new EventEmitter<any>()
  displayedColumns:any
  columnsToDisplay:any;
 // dataSource:any=[]
  
  
 
  
 

  constructor() { 
   
  }

  ngOnInit(): void {
    this.displayedColumns=this.columns
    this.columnsToDisplay=this.columns;
   // this.dataSource=this.dataset
    this.dataSource= new MatTableDataSource(this.dataset)
    console.log("this.displayedColumns",this.displayedColumns)
    console.log(" this.columnsToDisplay",this.columnsToDisplay)
    
      // set checkbox column
     
     // this.displayedColumns.push("select");
    
      // set table columns
      //this.displayedColumns = this.displayedColumns?.push(this.columns.map((x:any )=> x.columnDef));    // pre-fix static
      
      // add action column
      // this.displayedColumns.push("action");
      // this.dataSource = new MatTableDataSource<any>(this.dataset);
      
      // set pagination
     // this.dataSource.paginator = this.paginator;
   
  }
  search(event:any){
    this.dataSource.filter = event.target.value.trim().toLowerCase();
  }
  ngAfterViewInit() {    
    // this.dataSource.sort = this.empTbSort;
    this.dataSource.sort = this.empTbSort;
    this.dataSource.paginator = this.paginator;
}
  
  

}
