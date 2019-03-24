import { createSelector } from '@ngrx/store';

import { AppState } from './index';


export const selectStepper = (state: AppState) => state.wizard;

export const selectActiveStepper = createSelector(
  selectStepper,
  w => w.activeStepper,
);





