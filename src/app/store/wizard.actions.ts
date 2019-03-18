import { Action } from '@ngrx/store';

import { Wizard } from '../models/wizard';


export enum ActionTypes {
  FETCH_WIZARD_DATA = '[WIZARD] FETCH_WIZARD_DATA',
  SET_ACTIVE_WIZARD = '[WIZARD] SET_ACTIVE_WIZARD',
}


export class FetchWizardDataAction implements Action {
  readonly type = ActionTypes.FETCH_WIZARD_DATA;
}

export class SetActiveWizardAction implements Action {
  readonly type = ActionTypes.SET_ACTIVE_WIZARD;

  constructor(public wizard: Wizard) {
  }
}


export type ActionsUnion =
  FetchWizardDataAction | SetActiveWizardAction;

