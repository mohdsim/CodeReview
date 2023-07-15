import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
//import * as EventEmitter from 'events';

@Component({
  selector: 'app-globle-action-button',
  templateUrl: './globle-action-button.component.html',
  styleUrls: ['./globle-action-button.component.css']
})
export class GlobleActionButtonComponent implements OnInit {
  @Input() Save:string=''
  @Input() Update:string=''
  @Input() Edit:string=''
  @Input() Delete:string=''
  @Input() Cancle:string=''
  @Input() buttonSize?:string='large-button'
  @Input() btnTitle:string='Click'
  @Output() ClickMe = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }
  performAction(){
    this.ClickMe.emit()
  }

}
