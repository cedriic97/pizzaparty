import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { Initiative } from '../models/hype-interface';
import { getWizardPath, Wizard, IStaticDataObject, IStaticData, getStaticDataPath } from '../models/wizard';
import { HypeService } from '../services/hype.service';
import { ActionTypes, FetchStepperDataAction, SetActiveStepperAction, FetchStaticDataAction, SetStaticDataAction } from './stepper.actions';

@Injectable()
export class WizardEffects {
  constructor(private actions$: Actions,
    private http: HttpClient,
    private hype: HypeService,
  ) {
  }

  @Effect()
  fetchWizardData$: Observable<Action> = this.actions$.pipe(
    ofType<FetchStepperDataAction>(ActionTypes.FETCH_STEPPER_DATA),
    switchMap(() => this.hype.userData$),
    switchMap(userData => this.http.get(getWizardPath(userData.initiative))),
    catchError(() => this.http.get(getWizardPath(Initiative.ERROR))),
    map((data: Wizard) => new SetActiveStepperAction(data)),
  );

  @Effect()
  fetchStaticData$: Observable<Action> = this.actions$.pipe(
    ofType<FetchStaticDataAction>(ActionTypes.FETCH_STATIC_DATA),
    switchMap(() => this.http.get(getStaticDataPath('static'))),
    catchError(() => null),
    map((data: IStaticData) => new SetStaticDataAction(data)),
  );
}
