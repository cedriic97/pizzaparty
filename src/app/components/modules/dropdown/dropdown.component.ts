import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { IField } from '../../../models/process-config';
import { HypeService } from '../../../services/hype.service';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent implements OnInit {
  constructor(public hype: HypeService) { }
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  chips: string[] = []

  myControl = new FormControl();
  response: string[][];
  filteredOptions: Observable<string[][]>;
  isSelected = false;

  @Input() public field: IField;

  @Output() public optionSelected: EventEmitter<MatAutocompleteSelectedEvent>


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.chips.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(chip: string): void {
    const index = this.chips.indexOf(chip);

    if (index >= 0) {
      this.chips.splice(index, 1);
    }
  }

  ngOnInit() {
    console.log(this.field.connection)
    if (this.field.connection) {
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          filter(value => window.opener && !this.isSelected),
          switchMap(value => this._filter(value)),
        );
    }
  }

  private _filter(val: string): Observable<string[][]> {
    switch (this.field.connection) {
      case 'noquery':
        // not query anything
        break;

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

