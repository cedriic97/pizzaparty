import { Wizard } from '../models/wizard';
import { ActionsUnion, ActionTypes } from './stepper.actions';

export interface WizardState {
  activeStepper: Wizard;
}

const initialState: WizardState = {
  activeStepper: {} as Wizard,
};


export function wizardReducer(state = initialState, action: ActionsUnion): WizardState {
  switch (action.type) {

    case ActionTypes.SET_ACTIVE_STEPPER:
      return {
        ...state,
        activeStepper: action.stepper,
      };

    default:
      return state;
  }
}