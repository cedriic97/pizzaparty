
import { WizardState, wizardReducer } from './stepper.reducer';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
  wizard: WizardState;
}
export const reducers: ActionReducerMap<AppState> = {

  wizard: wizardReducer,
};