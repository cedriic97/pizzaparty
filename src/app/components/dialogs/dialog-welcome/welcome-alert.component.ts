import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-welcome-alert',
  templateUrl: './welcome-alert.component.html',
  styleUrls: ['./welcome-alert.component.scss']
})
export class WelcomeAlertComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WelcomeAlertComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
