import { createSelector } from '@ngrx/store';

import { AppState } from './index';


export const selectWizard = (state: AppState) => state.wizard;

export const selectActiveWizard = createSelector(
  selectWizard,
  w => w.activeWizard,
);





