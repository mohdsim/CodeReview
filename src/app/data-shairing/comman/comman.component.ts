import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comman',
  templateUrl: './comman.component.html',
  styleUrls: ['./comman.component.css']
})
export class CommanComponent implements OnInit {
  title=" hi i am parent Data"
  constructor() { }

  ngOnInit(): void {
  }

}
