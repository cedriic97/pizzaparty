import { Wizard } from '../models/wizard';
import { ActionsUnion, ActionTypes } from './wizard.actions';

export interface WizardState {
  activeWizard: Wizard;
}

const initialState: WizardState = {
  activeWizard: null,
};


function initWizard(wizard: Wizard): Wizard {
  return wizard;
}


export function wizardReducer(state = initialState, action: ActionsUnion): WizardState {
  switch (action.type) {

    case ActionTypes.SET_ACTIVE_WIZARD:
      const newWizard = initWizard(action.wizard);

      return {
        ...state,
        activeWizard: newWizard,
      };

    default:
      return state;
  }
}