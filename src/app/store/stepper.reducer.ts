import {Wizard} from '../models/wizard';
import {ActionsUnion, ActionTypes} from './stepper.actions';

export interface StepperState {
  activeStepper: Wizard;
}

const initialState: StepperState = {
  activeStepper: {
    imgpath: 'DEFAULT.LOGO.PATH',
    config: []
  },
};


export function stepperReducer(state = initialState, action: ActionsUnion): StepperState {
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
