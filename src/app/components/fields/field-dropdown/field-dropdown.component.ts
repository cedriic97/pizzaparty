import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { AppState } from 'src/app/store';
import { selectTags } from 'src/app/store/stepper/stepper.selectors';

import { EQueryable, IField, IStaticDataObject } from '../../../models/stepper';
import { HypeService } from '../../../services/hype.service';


@Component({
  selector: 'app-field-dropdown',
  templateUrl: './field-dropdown.component.html',
  styleUrls: ['./field-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldDropdownComponent),
      multi: true
    }
  ]
})

export class FieldDropdownComponent implements OnInit, ControlValueAccessor {
  private _selectedChips: string[] = [];
  onChange;
  removable = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  response: string[][];
  filteredOptions$: Observable<any>;
  staticData$: Observable<IStaticDataObject[]>;
  myControl = new FormControl;

  @Input() public field: IField;
  @Input() public forminputs: FormGroup;
  @Input()
  get selectedChips(): string[] {
    return this._selectedChips;
  }

  set selectedChips(v: string[]) {
    this._selectedChips = v;
    this.onChange(v);
    this.selectedChipsChange.emit(v);
  }

  @Output() public optionSelected: EventEmitter<MatAutocompleteSelectedEvent>;
  @Output() public selectedChipsChange = new EventEmitter<string[]>();

  // ValueControlAccessor functions
  writeValue(obj: any): void { }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  constructor(public hype: HypeService, public store: Store<AppState>) { }

  // fired when chip should be created
  add(event: MatChipInputEvent): void {
    if (event.value.length > 3) {
      this.selectedChips = [...this.selectedChips, event.value.trim()];
      event.input.value = '';
    }
  }
  // fired when a chip should be removed
  remove(chip: string): void {
    this.selectedChips = this.selectedChips.filter(v => v !== chip);
  }

  loadStaticData() {
    switch (this.field.connection.source) {
      case EQueryable.TAGS:
        this.staticData$ = this.store.pipe(select(selectTags));
        break;
      default:
        break;
    }
  }

  ngOnInit() {
    this.loadStaticData();
    this.filteredOptions$ = this.myControl.valueChanges
      .pipe(
        filter(value => window.opener || true),
        switchMap(value => this._filter(value)),
      );
  }

  private _filter(val: string): Observable<any> {
    switch (this.field.connection.source) {
      case 'departments':
        return this.hype.queryDepartments(val).pipe(
          map(value => value.splice(0, 5)),
        );
      case 'users':
        return this.hype.queryUser(val).pipe(
          map(value => value.splice(0, 5)),
        );
      case 'tags':
        return this.staticData$.pipe(
          map(value => value.filter(x => x.name.includes(val)))
        );

      default:
        break;
    }
  }
}

