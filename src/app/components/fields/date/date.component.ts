import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IField } from 'src/app/models/stepper';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  @Input() public field: IField;
  @Input() public forminputs: FormGroup;

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  constructor() { }

  ngOnInit() {
  }

}
