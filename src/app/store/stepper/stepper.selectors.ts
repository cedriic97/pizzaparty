import {createSelector} from '@ngrx/store';
import {AppState} from '../index';


export const selectStepper = (state: AppState) => state.stepper;

export const selectActiveStepper = createSelector(
  selectStepper,
  w => w.activeStepper,
);

export const selectStaticData = createSelector(
  selectStepper,
  w => w.staticData,
)

export const selectMethods = createSelector(
  selectStepper,
  w => w.staticData.methods,
)

export const selectTypesOfWaste = createSelector(
  selectStepper,
  w => w.staticData.typesOfWaste,
)

export const selectTags = createSelector(
  selectStepper,
  w => w.staticData.tags,
)

export const selectActionTypes = createSelector(
  selectStepper,
  w => w.staticData.action_types,
)





