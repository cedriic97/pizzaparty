import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { TranslateParser } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EQueryable, IField, IStaticDataObject } from 'src/app/models/stepper';
import { AppState } from 'src/app/store';
import { selectActionTypes, selectMethods, selectTypesOfWaste } from 'src/app/store/stepper/stepper.selectors';

@Component({
  selector: 'app-field-selector',
  templateUrl: './field-selector.component.html',
  styleUrls: ['./field-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldSelectorComponent),
      multi: true
    }
  ]
})
export class FieldSelectorComponent implements OnInit, ControlValueAccessor {
  private _selectedChips: string[] = [];
  chips$: Observable<IStaticDataObject[]>;
  onChange;

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

  @Output() public selectedChipsChange = new EventEmitter<string[]>();

  constructor(public store: Store<AppState>, public translateParser: TranslateParser) { }

  // ControlValueAccessor functions
  writeValue(obj: any): void { }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  ngOnInit(): void {
    this.loadStaticData();
  }

  loadStaticData() {
    switch (this.field.connection.source) {
      case EQueryable.METHODS_USED:
        this.chips$ = this.store.pipe(select(selectMethods));
        break;
      case EQueryable.TYPES_OF_WASTE:
        this.chips$ = this.store.pipe(select(selectTypesOfWaste));
        break;
      case EQueryable.ACTION_TYPES:
        this.chips$ = this.store.pipe(select(selectActionTypes));
        break;
      default:
        break;
    }
  }

  isSelected(chip: any): boolean {
    const index = this.selectedChips.indexOf(chip.name);
    return index >= 0;
  }

  selectChip(chip: any): void {
    const index = this.selectedChips.indexOf(chip.name);

    if (index >= 0) {
      this.selectedChips = this.selectedChips.filter(v => v !== chip.name);
    } else {
      this.selectedChips = [...this.selectedChips, chip.name];
    }
  }

}

