import {Action} from '@ngrx/store';
import {EFieldOptions} from '../../models/stepper';

export enum ActionTypes {
  SET_FIELD_VALUE = '[IDEA_FORM]SET_FIELD_VALUE',
}

export class SetFieldValueAction implements Action {
  readonly type = ActionTypes.SET_FIELD_VALUE;

  constructor(public readonly field: EFieldOptions, public readonly value: any) {
  }
}

export type ActionsUnion =
  SetFieldValueAction;
