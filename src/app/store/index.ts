import {StepperState, stepperReducer} from './stepper.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {ideaFormReducer, IdeaFormState} from './idea-form.reducer';


export interface AppState {
  ideaForm: IdeaFormState;
  stepper: StepperState;
}

export const reducers: ActionReducerMap<AppState> = {
  ideaForm: ideaFormReducer,
  stepper: stepperReducer,
};
