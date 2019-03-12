import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { filter, map, switchMap, startWith } from 'rxjs/operators';
import { IField, EQueryable } from '../../../models/process-config';
import { HypeService } from '../../../services/hype.service';
import { tags } from 'src/assets/data/tags';
import { FilterService } from 'src/app/services/filter.service';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {
  constructor(public hype: HypeService, public filter: FilterService) { }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  chips: string[] = []

  response: string[][];
  filteredOptions: Observable<string[][]>;
  filteredOptionsStatic: Observable<string[]>;
  isSelected = false;


  @Input() public field: IField;
  @Input() public forminputs: FormGroup;
  @Output() public optionSelected: EventEmitter<MatAutocompleteSelectedEvent>

  // fired when chip should be created
  add(event: MatChipInputEvent): void {
    console.log(this.forminputs.value);
    if (event.value.length > 3) {
      if ((event.value || '').trim()) {
        this.chips.push(event.value.trim());
        event.input.value = '';
      }
    }
  }
  // fired when a chip should be removed
  remove(chip: string): void {
    const index = this.chips.indexOf(chip);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }


  ngOnInit() {
    console.log(this.field);
    console.log(this.forminputs.value);
    if (this.field.connection == EQueryable.USERS || this.field.connection == EQueryable.DEPARTMENTS) {
      this.filteredOptions = this.forminputs.controls[this.field.type].valueChanges
        .pipe(
          filter(value => window.opener && !this.isSelected),
          switchMap(value => this._filter(value)),
        );
    } else if (this.field.connection == EQueryable.TAGS || this.field.connection == EQueryable.METHODS_USED) {
      this.filteredOptionsStatic = this.forminputs.controls[this.field.type].valueChanges
        .pipe(
          startWith(''),
          map(value => this._filterStatic(value))
        );
    }

  }
  private _filterStatic(val: string): string[] {
    switch (this.field.connection) {
      case 'tags':
        return this.filter.queryTags(val).slice(0, 5)

      case 'methods_used':
        return this.filter.queryMethodsUsed(val).slice(0, 5)

      default:
        break;
    }
  }
  private _filter(val: string): Observable<string[][]> {
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

      default:
        break;
    }
  }
}

