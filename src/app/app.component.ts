import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';

import { ICurrentUser } from './models/current-user';
import { HypeService } from './services/hype.service';
import { AppState } from './store';
import { FetchStepperDataAction } from './store/stepper.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hype-idea-form';
  currentUser: ICurrentUser;

  constructor(store: Store<AppState>, translate: TranslateService, private http: HttpClient, private hype: HypeService) {
    translate.setDefaultLang('de');
    translate.use('en');

    store.dispatch(new FetchStepperDataAction());
    // console.log(store.dispatch(new FetchWizardDataAction()));

  }

  ngOnInit(): void {
  }
}
