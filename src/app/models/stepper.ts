import { config } from './process-config';
import { EInitiative } from './current-user';


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
    TYPES_OF_WASTE = 'types_of_waste',
    PICTURE_BEFORE = 'picture_before',
    PICTURE_AFTER = 'picture_before'
}



export enum EQueryable {
  DEPARTMENTS = 'departments',
  USERS = 'users',
  METHODS_USED = 'methods_used',
  TYPES_OF_WASTE = 'types_of_waste',
  TAGS = 'tags',
}

export enum ECurrency {
  EUR = '€',
  USD = '$',
  CHF = 'CHF'
}

// Data Source Connection interface
export interface IConnection {
  source: EQueryable;
  isLocal: boolean;
}

// IConfig --> ISection --> IField
// Initiative Configuration Interface
export interface IConfig {
  imgpath: string;
  config: ISection[];
}
// A Section of a certain configuration
export interface ISection {
  name: string;
  description: string;
  fields: string[];
}
// Configuration of a field in a section
export interface IField {
  type: EFieldOptions;
  title: string;
  connection?: IConnection;
  währung?: ECurrency;
}

// ControllerComponent control
export enum EFieldType {
  FREETEXT = 'text',
  DROPDOWN = 'user',
  DATE = 'date',
  NUMBER = 'number',
  IMAGE = 'image',
  SELECTOR = 'selector'
}



// Data that is static and not dynamically provided
export interface IStaticDataObject {
  name: string;
  description?: string;
}
// Available static Groups: Methods, Types of Waste, Tags
export interface IStaticData {
  methods: IStaticDataObject[];
  typesOfWaste: IStaticDataObject[];
  tags: IStaticDataObject[];
}

// TODO: Was bringt das eigentlich
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
  [EFieldOptions.METHODS_USED]: EFieldType.SELECTOR,
  [EFieldOptions.TYPES_OF_WASTE]: EFieldType.SELECTOR,
  [EFieldOptions.PICTURE_BEFORE]: EFieldType.IMAGE,
  [EFieldOptions.PICTURE_AFTER]: EFieldType.IMAGE
};




export type Stepper = IConfig;


export function getStepperPath(initiative: EInitiative): string {
  return `assets/data/configurations/c_${initiative.toLowerCase()}.json`;
}

export function getStaticDataPath(filename: string): string {
  return `assets/data/${filename.toLowerCase()}.json`;
}


