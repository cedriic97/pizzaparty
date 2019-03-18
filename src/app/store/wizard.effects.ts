import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Initiative } from '../models/hype-interface';
import { getWizardPath, Wizard } from '../models/wizard';
import { HypeService } from '../services/hype.service';
import { ActionTypes, FetchWizardDataAction, SetActiveWizardAction } from './wizard.actions';

@Injectable()
export class WizardEffects {
  constructor(private actions$: Actions,
    private http: HttpClient,
    private hype: HypeService,
  ) {
  }

  @Effect()
  fetchWizardData$: Observable<Action> = this.actions$.pipe(
    ofType<FetchWizardDataAction>(ActionTypes.FETCH_WIZARD_DATA),
    switchMap(() => this.hype.initiative$),
    switchMap(initiative => this.http.get(getWizardPath("cip"))),

    catchError(() => this.http.get(getWizardPath(Initiative.ERROR))),
    map((data: Wizard) => new SetActiveWizardAction(data)),
  );

}
