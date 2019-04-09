import { Stepper, IStaticData } from '../models/stepper';
import { ActionsUnion, ActionTypes } from './stepper.actions';

export interface StepperState {
  activeStepper: Stepper;
  staticData: IStaticData;
}

const initialState: StepperState = {
  activeStepper: {
    imgpath: 'DEFAULT.LOGO.PATH',
    config: []
  },
  staticData: {
    methods: [],
    typesOfWaste: [],
    tags: [],
    action_types: []
  }
};




export function stepperReducer(state = initialState, action: ActionsUnion): StepperState {
  switch (action.type) {

    case ActionTypes.SET_ACTIVE_STEPPER:
      return {
        ...state,
        activeStepper: action.stepper,
      };

    case ActionTypes.SET_STATIC_DATA:
      return {
        ...state,
        staticData: action.staticData,
      };

    default:
      return state;
  }
}
