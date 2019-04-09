import {StepperState, stepperReducer} from './stepper/stepper.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {formReducer, FormState} from './form/form.reducer';


export interface AppState {
  ideaForm: FormState;
  stepper: StepperState;
}

export const reducers: ActionReducerMap<AppState> = {
  ideaForm: formReducer,
  stepper: stepperReducer,
};
