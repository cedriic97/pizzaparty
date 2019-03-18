
import { WizardState, wizardReducer } from './wizard.reducer';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
  wizard: WizardState;
}
export const reducers: ActionReducerMap<AppState> = {

  wizard: wizardReducer,
};