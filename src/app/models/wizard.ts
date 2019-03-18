import {Initiative} from './hype-interface';
import { config } from './process-config';


export enum EFieldOptions {
  AUTHOR = 'author',
  COMMENT = 'comment',
  COMPLETION_DATE = 'completion_date',
  START_DATE = 'start_date',
  DEPARTMENT = 'department',
  PROBLEM_DESCRIPTION = 'problem_description',
  SOLUTION = 'solution',
  TAGS = 'tags',
  TITLE = 'title',
  CHAMPION = 'champion',
  CONSEQUENCES = 'consequences',
  EXPECTED_RESULT = 'expected_result',
  INNOVATIONPOINTS = 'innovationpoints',
  METHODS_USED = 'methods_used',
  TYPES_OF_WASTE = 'types_of_waste'
}



export enum EQueryable {
  DEPARTMENTS = 'departments',
  USERS = 'users',
  METHODS_USED = 'methods_used',
  TAGS = 'tags',

}

export enum ECurrency {
  EUR = '€',
  USD = '$',
  CHF = 'CHF'
}

export enum EMaterialIcons {
  PERSON = 'person',
  CANCEL = 'cancel',
  SETTINGS = 'settings',
  ACCESSIBILITY = 'accessibility',
}

export enum EInitiative {
  CIP = 'CIP',
  KVPHARMA = 'KVPharma',
  MOVE = 'move'
}

export interface IField {
  type: EFieldOptions;
  title: string;
  connection?: EQueryable;
  währung?: ECurrency;
  icon?: EMaterialIcons;
  componentAvailable: boolean;
}

export interface IConfig {
  imgpath: string;
  config: IProcess[];
}

export interface IProcess {
  name: string;
  description: string;
  fields: string[];
}

export enum EFieldType {
  FREETEXT = 'text',
  DROPDOWN = 'user',
  DATE = 'date',
  NUMBER = 'number'
}

export const fieldTypeLookup = {
  [EFieldOptions.AUTHOR]: EFieldType.DROPDOWN,
  [EFieldOptions.COMMENT]: EFieldType.FREETEXT,
  [EFieldOptions.COMPLETION_DATE]: EFieldType.DATE,
  [EFieldOptions.START_DATE]: EFieldType.DATE,
  [EFieldOptions.DEPARTMENT]: EFieldType.DROPDOWN,
  [EFieldOptions.PROBLEM_DESCRIPTION]: EFieldType.FREETEXT,
  [EFieldOptions.SOLUTION]: EFieldType.FREETEXT,
  [EFieldOptions.TAGS]: EFieldType.DROPDOWN,
  [EFieldOptions.TITLE]: EFieldType.FREETEXT,
  [EFieldOptions.CHAMPION]: EFieldType.DROPDOWN,
  [EFieldOptions.CONSEQUENCES]: EFieldType.DROPDOWN,
  [EFieldOptions.EXPECTED_RESULT]: EFieldType.DROPDOWN,
  [EFieldOptions.INNOVATIONPOINTS]: EFieldType.NUMBER,
  [EFieldOptions.METHODS_USED]: EFieldType.DROPDOWN,
  [EFieldOptions.TYPES_OF_WASTE]: EFieldType.DROPDOWN
};


export type StepUnion = IConfig;

export type Wizard = StepUnion;


export function getWizardPath(initiative: string): string {
  return `assets/data/${initiative.toLowerCase()}/config.json`;
}


