import {IStaticData, Stepper} from '../../models/stepper';
import {Action} from '@ngrx/store';


export enum ActionTypes {
  FETCH_STEPPER_DATA = '[STEPPER]FETCH_STEPPER_DATA',
  FETCH_STATIC_DATA = '[STEPPER]FETCH_STATIC_DATA',
  SET_ACTIVE_STEPPER = '[STEPPER]SET_ACTIVE_STEPPER',
  SET_STATIC_DATA = '[STEPPER]SET_STATIC_DATA'
}


export class FetchStepperDataAction implements Action {
  readonly type = ActionTypes.FETCH_STEPPER_DATA;
}

export class SetActiveStepperAction implements Action {
  readonly type = ActionTypes.SET_ACTIVE_STEPPER;

  constructor(public stepper: Stepper) {
  }
}

export class FetchStaticDataAction implements Action {
  readonly type = ActionTypes.FETCH_STATIC_DATA;
}

export class SetStaticDataAction implements Action {
  readonly type = ActionTypes.SET_STATIC_DATA;

  constructor(public staticData: IStaticData) {
  }
}

export type ActionsUnion =
  FetchStepperDataAction
  | FetchStaticDataAction
  | SetActiveStepperAction
  | SetStaticDataAction;

