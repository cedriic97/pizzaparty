import { Action } from '@ngrx/store';

import { Wizard } from '../models/wizard';


export enum ActionTypes {
  FETCH_STEPPER_DATA = '[STEPPER]FETCH_STEPPER_DATA',
  SET_ACTIVE_STEPPER = '[STEPPER]SET_ACTIVE_STEPPER',
}


export class FetchStepperDataAction implements Action {
  readonly type = ActionTypes.FETCH_STEPPER_DATA;
}

export class SetActiveStepperAction implements Action {
  readonly type = ActionTypes.SET_ACTIVE_STEPPER;

  constructor(public stepper: Wizard) {
  }
}


export type ActionsUnion =
  FetchStepperDataAction | SetActiveStepperAction;

