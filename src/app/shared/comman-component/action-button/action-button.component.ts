import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
// export class ActionButtonComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class ActionButtonComponent implements OnInit {
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
