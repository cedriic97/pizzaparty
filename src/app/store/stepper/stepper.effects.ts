import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ActionTypes, FetchStaticDataAction, FetchStepperDataAction, SetActiveStepperAction, SetStaticDataAction} from './stepper.actions';
import {HypeService} from '../../services/hype.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {getLocalStoragePath, getStepperPath, IStaticData, Stepper} from '../../models/stepper';
import {Observable} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {EInitiative} from '../../models/hype';
import {Action} from '@ngrx/store';



@Injectable()
export class StepperEffects {
  constructor(private actions$: Actions, private http: HttpClient, private hype: HypeService) {
  }

  @Effect()
  fetchStepperData$: Observable<Action> = this.actions$.pipe(
    ofType<FetchStepperDataAction>(ActionTypes.FETCH_STEPPER_DATA),
    switchMap(() => this.hype.userData$),
    switchMap(userData => this.http.get(getStepperPath(userData.initiative))),
    catchError(() => this.http.get(getStepperPath(EInitiative.DEFAULT))),
    map((data: Stepper) => new SetActiveStepperAction(data)),
  );

  @Effect()
  fetchStaticData$: Observable<Action> = this.actions$.pipe(
    ofType<FetchStaticDataAction>(ActionTypes.FETCH_STATIC_DATA),
    switchMap(() => this.http.get(getLocalStoragePath('local-storage'))),
    catchError(() => null),
    map((data: IStaticData) => new SetStaticDataAction(data)),
  );
}
