
import { ActionsUnion, ActionTypes } from './form.actions';

export interface FormState {
  values: {
    [key: string]: any;
  };
}

const initialState: FormState = {
  values: {},
};

export function formReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.SET_FIELD_VALUE:
      return {
        ...state,
        values: { ...state.values, [action.field]: action.value },
      };

    default:
      return state;
  }

}
