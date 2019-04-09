import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import {IField} from 'src/app/models/stepper';
import {FormControl, FormGroup} from '@angular/forms';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {select, Store} from '@ngrx/store';
import {AppState} from '../../../store';
import {Observable} from 'rxjs';
import {selectFieldValue} from '../../../store/form/form.selectors';
import {SetFieldValueAction} from '../../../store/form/form.actions';

@Component({
  selector: 'app-field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.scss']
})
export class FieldTextComponent implements OnInit {
  @Input() public field: IField;
  @Input() public forminputs: FormGroup;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  value$: Observable<string>;


  constructor(public store: Store<AppState>) {
  }

  ngOnInit() {

  }
}
