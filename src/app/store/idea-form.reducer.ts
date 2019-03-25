import {ActionsUnion, ActionTypes} from './idea-form.actions';
import {EFieldOptions} from '../models/wizard';

export interface IdeaFormState {
  values: { [key: string]: any };
}

const initialState: IdeaFormState = {
  values: {
    [EFieldOptions.SOLUTION]: 'yo'
  },
};

export function ideaFormReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.SET_FIELD_VALUE:
      return {
        ...state,
        values: {...state.values, [action.field]: action.value},
      };

    default:
      return state;
  }

}
