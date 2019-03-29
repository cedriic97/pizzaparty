import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { ICurrentUser } from './models/current-user';
import { HypeService } from './services/hype.service';
import { AppState } from './store';
import { FetchStepperDataAction, FetchStaticDataAction } from './store/stepper.actions';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { WelcomeAlertComponent } from './components/welcome-alert/welcome-alert.component';

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

