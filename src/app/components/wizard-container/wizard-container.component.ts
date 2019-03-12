import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatStepper } from '@angular/material';
import { IConfig, EFieldOptions } from 'src/app/models/process-config';
import { HypeService } from 'src/app/services/hype.service';

import { SuccessAlertComponent } from '../success-alert/success-alert.component';


@Component({
  selector: 'app-wizard-container',
  templateUrl: './wizard-container.component.html',
  styleUrls: ['./wizard-container.component.scss'],
})

export class WizardContainerComponent implements OnInit {
  response: any;
  @ViewChild('stepper') private next: MatStepper;
  field: IConfig = JSON.parse(
    `{
    "initiative": "FIT",
    "title": "Torstens Echte",
    "type": "CIP",
    "process": {
      "section1":
        [
          "title",
          "problem_description",
          "solution",
          "author"
        ],
      "section2":
        [
          "author",
          "champion",
          "department",
          "start_date",
          "completion_date"


        ],
      "section3":
        [
          "tags",
          "types_of_waste",
          "methods_used",
          "comment"

        ]
    }
  }`

  )


  formGroup: FormGroup;
  post: any;
  des: string = '';
  name: string = '';


  constructor(private fb: FormBuilder, public hype: HypeService, public dialog: MatDialog) {
    this.formGroup = fb.group({
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
