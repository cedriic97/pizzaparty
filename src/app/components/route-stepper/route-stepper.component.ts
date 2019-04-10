import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatStepper } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EFieldOptions, IConfig, IStaticData } from 'src/app/models/stepper';
import { HypeService } from 'src/app/services/hype.service';
import { selectActiveStepper, selectStaticData } from 'src/app/store/stepper/stepper.selectors';

import { AppState } from '../../store';
import { SetFieldValueAction } from '../../store/form/form.actions';
import { SuccessAlertComponent } from '../dialogs/dialog-success/success-alert.component';

@Component({
  selector: 'app-route-stepper',
  templateUrl: './route-stepper.component.html',
  styleUrls: ['./route-stepper.component.scss'],
})

export class RouteStepperComponent implements OnInit {
  config$: Observable<IConfig>;
  staticData$: Observable<IStaticData>;

  formGroup = new FormGroup({
    [EFieldOptions.AUTHOR]: new FormControl('', Validators.required),
    [EFieldOptions.CHAMPION]: new FormControl('', Validators.required),
    [EFieldOptions.COMMENT]: new FormControl(''),
    [EFieldOptions.COMPLETION_DATE]: new FormControl('', Validators.required),
    [EFieldOptions.CONSEQUENCES]: new FormControl('', Validators.required),
    [EFieldOptions.DEPARTMENT]: new FormControl('', Validators.required),
    [EFieldOptions.EXPECTED_RESULT]: new FormControl('', Validators.required),
    [EFieldOptions.METHODS_USED]: new FormControl(''),
    [EFieldOptions.PROBLEM_DESCRIPTION]: new FormControl('', Validators.required),
    [EFieldOptions.TYPES_OF_WASTE]: new FormControl(''),
    [EFieldOptions.SOLUTION]: new FormControl('', Validators.required),
    [EFieldOptions.TAGS]: new FormControl(''),
    [EFieldOptions.START_DATE]: new FormControl('', Validators.required),
    [EFieldOptions.ACTION_TYPE]: new FormControl(''),
    [EFieldOptions.TITLE]: new FormControl('', Validators.required),
    [EFieldOptions.ATTACHMENTS]: new FormControl(''),
    [EFieldOptions.MONETARY_COSTS]: new FormControl(''),
    [EFieldOptions.MONETARY_SAVINGS]: new FormControl(''),
    [EFieldOptions.TIME_SAVINGS]: new FormControl(''),
    [EFieldOptions.RESPONSIBLE_FOR_IMPLEMENTATION]: new FormControl('', Validators.required),
    [EFieldOptions.PICTURE_AFTER]: new FormControl(''),
    [EFieldOptions.PICTURE_BEFORE]: new FormControl('')
  });

  constructor(public hype: HypeService, public dialog: MatDialog, private store: Store<AppState>) {
    this.config$ = store.pipe(select(selectActiveStepper));
    this.staticData$ = store.pipe(select(selectStaticData));
  }

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(state => {
      for (const key in state) {
        if (key) {
          this.store.dispatch(new SetFieldValueAction(key as EFieldOptions, state[key]));
        }
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
    this.dialog.open(SuccessAlertComponent,
      {
        disableClose: true,
        panelClass: 'my-panel',
        autoFocus: false
      }
    );
  }
}

