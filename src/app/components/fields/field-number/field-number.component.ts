import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Store } from '@ngrx/store';
import { EUnitCurrency, EUnitTime, IField } from 'src/app/models/stepper';
import { AppState } from 'src/app/store';

interface INumberWithUnit {
  value: number;
  unit: string;
}
@Component({
  selector: 'app-field-number',
  templateUrl: './field-number.component.html',
  styleUrls: ['./field-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldNumberComponent),
      multi: true
    }
  ]
})

export class FieldNumberComponent implements OnInit, ControlValueAccessor {
  private _number: INumberWithUnit = { value: null, unit: '' }
  @Input() public field: IField;
  @Input() public formValues: FormGroup;
  onChange: (_: any) => {};
  units;

  get number(): INumberWithUnit {
    return this._number;
  }

  set number(v: INumberWithUnit) {
    this._number = v;
    this.onChange(v);
    this.numberChange.emit(v);
  }
  @Output() public numberChange = new EventEmitter<INumberWithUnit>();
  constructor(public store: Store<AppState>) { }

  writeValue(obj: any): void { }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  unitChange() {
    this.number = { ...this._number, unit: this.number.unit }
  }

  valueChange() {
    this.number = { ...this._number, value: this.number.value }
  }

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
