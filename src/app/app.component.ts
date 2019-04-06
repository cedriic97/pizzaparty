import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { WelcomeAlertComponent } from './components/welcome-alert/welcome-alert.component';
import { ICurrentUser } from './models/current-user';
import { AppState } from './store';
import { FetchStaticDataAction, FetchStepperDataAction } from './store/stepper.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'hype-idea-form';
  currentUser: ICurrentUser;

  constructor(private router: Router, store: Store<AppState>, translate: TranslateService, public dialog: MatDialog) {
    translate.setDefaultLang('de');
    translate.use('en');

    store.dispatch(new FetchStepperDataAction());
    store.dispatch(new FetchStaticDataAction())
    // console.log(store.dispatch(new FetchStepperDataAction()));

    store.subscribe(console.log);

  }

  ngOnInit() {
    this.showWelcomeDialog();

  }
  showWelcomeDialog() {
    const dialogRef = this.dialog.open(WelcomeAlertComponent, { disableClose: false, panelClass: 'panel-welcome' })
  }
}

