import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from 'src/app/models/stepper';

@Component({
  selector: 'app-field-datepicker',
  templateUrl: './field-datepicker.component.html',
  styleUrls: ['./field-datepicker.component.scss']
})
export class FieldDatepickerComponent implements OnInit {
  @Input() public field: IField;
  @Input() public formValues: FormGroup;

  filterWeekendDays = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  constructor() { }

  ngOnInit() {
  }

}
