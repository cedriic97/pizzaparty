import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-welcome-alert',
  templateUrl: './welcome-alert.component.html',
  styleUrls: ['./welcome-alert.component.scss']
})
export class WelcomeAlertComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WelcomeAlertComponent>,
    ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
