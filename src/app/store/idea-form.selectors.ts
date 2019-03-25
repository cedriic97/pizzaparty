import {AppState} from './index';
import {createSelector} from '@ngrx/store';
import {EFieldOptions} from '../models/wizard';

export const selectIdeaForm = (state: AppState) => state.ideaForm;

export const selectFieldValue = (field: EFieldOptions) => createSelector(
  selectIdeaForm,
  s => s.values[field],
);
