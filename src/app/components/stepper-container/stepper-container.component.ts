import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatStepper } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { EFieldOptions, IConfig, IStaticData } from 'src/app/models/wizard';
import { HypeService } from 'src/app/services/hype.service';
import { AppState } from '../../store';
import { SuccessAlertComponent } from '../success-alert/success-alert.component';
import { selectActiveStepper, selectStaticData } from 'src/app/store/stepper.selectors';
import { SetFieldValueAction } from '../../store/idea-form.actions';

@Component({
  selector: 'app-stepper-container',
  templateUrl: './stepper-container.component.html',
  styleUrls: ['./stepper-container.component.scss'],
})

export class StepperContainerComponent implements OnInit {
  config$: Observable<IConfig>;
  response: any;
  staticData$: Observable<IStaticData>;
  formGroup = new FormGroup({
    [EFieldOptions.AUTHOR]: new FormControl(),
    [EFieldOptions.CHAMPION]: new FormControl(),
    [EFieldOptions.COMMENT]: new FormControl(),
    [EFieldOptions.COMPLETION_DATE]: new FormControl(),
    [EFieldOptions.CONSEQUENCES]: new FormControl(),
    [EFieldOptions.DEPARTMENT]: new FormControl(),
    [EFieldOptions.EXPECTED_RESULT]: new FormControl(),
    [EFieldOptions.INNOVATIONPOINTS]: new FormControl(),
    [EFieldOptions.METHODS_USED]: new FormControl(),
    [EFieldOptions.PROBLEM_DESCRIPTION]: new FormControl(),
    [EFieldOptions.TYPES_OF_WASTE]: new FormControl(),
    [EFieldOptions.SOLUTION]: new FormControl(),
    [EFieldOptions.TAGS]: new FormControl(),
    [EFieldOptions.START_DATE]: new FormControl(),
    [EFieldOptions.TITLE]: new FormControl()
  });

  constructor(public hype: HypeService, public dialog: MatDialog, private store: Store<AppState>, private http: HttpClient) {
    this.config$ = store.pipe(select(selectActiveStepper));
    this.staticData$ = store.pipe(select(selectStaticData));


  }

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(state => {
      // tslint:disable-next-line: forin
      for (const key in state) {
        this.store.dispatch(new SetFieldValueAction(key as EFieldOptions, state[key]));
      }
    });
  }


  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  fireSuccess() {
    const dialogRef = this.dialog.open(SuccessAlertComponent, { disableClose: true, panelClass: 'my-panel' });

  }

  request(searchval: string): void {
    if (window.opener) {
      this.hype.queryUser(searchval).subscribe(result =>
        this.response = JSON.stringify(result)
      );
    }
  }
}
