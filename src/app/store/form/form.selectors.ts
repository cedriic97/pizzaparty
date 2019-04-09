import {AppState} from '../index';
import {EFieldOptions} from '../../models/stepper';
import {createSelector} from '@ngrx/store';

export const selectIdeaForm = (state: AppState) => state.ideaForm;

export const selectFieldValue = (field: EFieldOptions) => createSelector(
  selectIdeaForm,
  s => s.values[field],
);

export const selectFormValues = createSelector(
  selectIdeaForm,
  s => s.values,
);
