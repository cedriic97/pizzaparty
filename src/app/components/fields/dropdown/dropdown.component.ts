import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, OnInit, Output, forwardRef } from '@angular/core';
import { FormGroup, NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { FilterService } from 'src/app/services/filter.service';

import { EQueryable, IField, IStaticDataObject } from '../../../models/wizard';
import { HypeService } from '../../../services/hype.service';
import { IProcess } from 'src/app/models/wizard';
import { SelectorComponent } from '../selector/selector.component';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectMethods, selectTypesOfWaste, selectTags } from 'src/app/store/stepper.selectors';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})

export class DropdownComponent implements OnInit, ControlValueAccessor {
  private _selectedChips: string[] = [];
  onChange;
  myControl = new FormControl;

  removable = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  response: string[][];
  filteredOptions$: Observable<any>;
  staticData$: Observable<IStaticDataObject[]>;


  @Input() public field: IField;
  @Input() public forminputs: FormGroup;
  @Output() public optionSelected: EventEmitter<MatAutocompleteSelectedEvent>

  @Input()
  get selectedChips(): string[] {
    return this._selectedChips;
  }

  set selectedChips(v: string[]) {
    console.log("sdsd")
    this._selectedChips = v;
    this.onChange(v);
    this.selectedChipsChange.emit(v);
  }

  @Output() public selectedChipsChange = new EventEmitter<string[]>();

  writeValue(obj: any): void {

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  constructor(public hype: HypeService, public filter: FilterService, public store: Store<AppState>) { }

  // fired when chip should be created
  add(event: MatChipInputEvent): void {
    console.log(this.selectedChips)
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
    switch (this.field.connection) {
      case EQueryable.TAGS:
        this.staticData$ = this.store.pipe(select(selectTags));
        break;

      default:
        break;
    }
  }
  // TODO: On Value Changes war auf alte Form registriert und muss wieder laufen
  ngOnInit() {
    this.loadStaticData()

    this.filteredOptions$ = this.myControl.valueChanges
      .pipe(
        //filter(value => window.opener),
        switchMap(value => this._filter(value)),
      );
  }

  private _filter(val: string): Observable<any> {
    console.log(val);
    switch (this.field.connection) {
      case 'departments':
        return this.hype.queryDepartments(val).pipe(
          map(value => value.rows.splice(0, 5)),
        );

      case 'users':
        return this.hype.queryUser(val).pipe(
          map(value => value.rows.splice(0, 5)),
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

