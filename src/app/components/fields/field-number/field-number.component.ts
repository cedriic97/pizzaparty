import { Component, OnInit, Input } from '@angular/core';
import { IField, EUnitCurrency, EUnitTime } from 'src/app/models/stepper';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-field-number',
  templateUrl: './field-number.component.html',
  styleUrls: ['./field-number.component.scss']
})

export class FieldNumberComponent implements OnInit {
  @Input() public field: IField;
  @Input() public formValues: FormGroup;

  units;


  constructor() { }

  ngOnInit() {
    switch (this.field.unit_type) {
      case 'time':
        this.units = Object.keys(EUnitTime)
        break;
      case 'currency':
        this.units = Object.keys(EUnitCurrency)
        break;

      default:
        break;
    }
  }



}
