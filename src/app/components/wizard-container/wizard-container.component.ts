import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatStepper } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { StepUnion, EFieldOptions, IConfig, getWizardPath, EInitiative } from 'src/app/models/wizard';
import { HypeService } from 'src/app/services/hype.service';
import { selectActiveWizard } from 'src/app/store/wizard.selectors';

import { AppState } from '../../store';
import { SuccessAlertComponent } from '../success-alert/success-alert.component';
import { HttpClient } from '@angular/common/http';
import { Initiative } from 'src/app/models/hype-interface';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-wizard-container',
  templateUrl: './wizard-container.component.html',
  styleUrls: ['./wizard-container.component.scss'],
})

export class WizardContainerComponent implements OnInit {
  response: any;
  staticData: any;
  config: IConfig = null;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, public hype: HypeService, public dialog: MatDialog, private store: Store<AppState>, private http: HttpClient) {
    // this.store.pipe(select(selectActiveWizard)).subscribe(res => {
    //   this.config = res;
    // });

    //this.stepCount$ = this.steps$.pipe(map(config => config.length));

    this.formGroup = this.fb.group({
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
  }

  ngOnInit() {
    this.loadConfig();
    this.loadStaticData();
  }

  loadStaticData() {
    this.http.get('/assets/data/data.json')
      .subscribe(v => console.log(v))
    console.log(this.staticData);
  }

  loadConfig() {

    this.hype.userData$.subscribe(
      userData => {
        this.http.get(getWizardPath(userData.initiative))
          .subscribe(

            (v: IConfig) => { this.config = v; }

          );
      },
      err => this.loadDefaultConfig()
    );
  }

  loadDefaultConfig() {
    this.http.get(getWizardPath(Initiative.ERROR)).subscribe((v: IConfig) => {
      console.log(v),
        this.config = v;
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
