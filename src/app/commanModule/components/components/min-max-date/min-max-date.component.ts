import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { compareTwoDate } from 'src/app/core/constants/app.constant';

@Component({
  selector: 'app-min-max-date',
  templateUrl: './min-max-date.component.html',
  styleUrls: ['./min-max-date.component.css']
})
export class MinMaxDateComponent implements OnInit {
  promoSetupForm:any;
  stDate: any;

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.buildFrom()
  }
  buildFrom() {
    this.promoSetupForm = this.fb.group({
      effectiveEndDate: ['', [Validators.required]],
      effectiveStartDate: ['', [Validators.required]],
    });
  }

 changeStDate(evn:any) {
    this.stDate = evn;
    let stValue = this.promoSetupForm?.value?.effectiveStartDate;
    let endValue = this.promoSetupForm?.value?.effectiveEndDate;
    if (stValue && endValue) {
      const isValidDate = compareTwoDate(stValue, endValue);
      if (!isValidDate) {
        this.promoSetupForm.patchValue({
          effectiveEndDate: null
        })
      }
    }
  }

  dateFormatForPatch(date:any) {
    console.log("date", date);
    if (date != null) {
      return moment(date, 'DD/MM/YYYY').toDate()
    } else {
      return null;
    }
  }

}
