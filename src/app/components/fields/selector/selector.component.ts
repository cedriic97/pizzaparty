import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { TranslateParser } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EQueryable, IField, IStaticDataObject } from 'src/app/models/stepper';
import { AppState } from 'src/app/store';
import { selectMethods, selectTypesOfWaste } from 'src/app/store/stepper.selectors';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectorComponent),
      multi: true
    }
  ]
})
export class SelectorComponent implements OnInit, ControlValueAccessor {
  private _selectedChips: string[] = [];
  onChange;
  selected = true;
  chips$: Observable<IStaticDataObject[]>;

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

  writeValue(obj: any): void {
    console.log(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

  constructor(public store: Store<AppState>, public translateParser: TranslateParser) {
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
        this.chips$ = this.store.pipe(select(selectTypesOfWaste))
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

