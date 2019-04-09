import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { WelcomeAlertComponent } from './components/dialogs/dialog-welcome/welcome-alert.component';
import { ICurrentUser } from './models/hype';
import { AppState } from './store';
import { FetchStaticDataAction, FetchStepperDataAction } from './store/stepper/stepper.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'one-idea-form';
  currentUser: ICurrentUser;

  constructor(store: Store<AppState>, translate: TranslateService, public dialog: MatDialog) {
    // sets default language
    translate.use('de');

    // initialize store
    store.dispatch(new FetchStepperDataAction());
    store.dispatch(new FetchStaticDataAction());
    store.subscribe(console.log);

    this.showWelcomeDialog();

  }

  showWelcomeDialog() {
    const dialogRef = this.dialog.open(
      WelcomeAlertComponent,
      {
        disableClose: false,
        panelClass: 'panel-welcome',
        autoFocus: false
      }
    );
  }
}

