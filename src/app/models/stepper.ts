import { EInitiative } from './hype';

// All available fields | Startingpoint for adding new fields
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
  METHODS_USED = 'methods_used',
  TYPES_OF_WASTE = 'types_of_waste',
  PICTURE_BEFORE = 'picture_before',
  PICTURE_AFTER = 'picture_before',
  MONETARY_COSTS = 'monetary_costs',
  MONETARY_SAVINGS = 'monetary_savings',
  ATTACHMENTS = 'attachments',
  TIME_SAVINGS = 'time_savings',
  ACTION_TYPE = 'action_type',
  RESPONSIBLE_FOR_IMPLEMENTATION = 'responsible_for_implementation'
}

export enum EQueryable {
  DEPARTMENTS = 'departments',
  USERS = 'users',
  METHODS_USED = 'methods_used',
  TYPES_OF_WASTE = 'types_of_waste',
  TAGS = 'tags',
  ACTION_TYPES = 'action_types'
}
// Keys are translatable | Do not change them
export enum EUnitCurrency {
  EUR = '€',
  USD = '$',
  CHF = 'CHF'
}

// Keys are translatable | Do not change them
export enum EUnitTime {
  HOUR = 'h',
  MINUTE = 'm',
  DAY = 'd'
}

// Defines the unit type in which a value is measured
export enum EUnitType {
  TIME = 'time',
  CURRENCY = 'currency'
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
  description: string;
  connection?: IConnection;
  unit_type?: EUnitType;
}

// ControllerComponent control
export enum EFieldType {
  FREETEXT = 'text',
  DROPDOWN = 'user',
  DATE = 'date',
  NUMBER = 'number',
  IMAGE = 'image',
  SELECTOR = 'selector',
  FILES = 'files'
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
  action_types: IStaticDataObject[];
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
  [EFieldOptions.CONSEQUENCES]: EFieldType.FREETEXT,
  [EFieldOptions.EXPECTED_RESULT]: EFieldType.FREETEXT,
  [EFieldOptions.METHODS_USED]: EFieldType.SELECTOR,
  [EFieldOptions.TYPES_OF_WASTE]: EFieldType.SELECTOR,
  [EFieldOptions.PICTURE_BEFORE]: EFieldType.IMAGE,
  [EFieldOptions.PICTURE_AFTER]: EFieldType.IMAGE,
  [EFieldOptions.MONETARY_COSTS]: EFieldType.NUMBER,
  [EFieldOptions.MONETARY_SAVINGS]: EFieldType.NUMBER,
  [EFieldOptions.ATTACHMENTS]: EFieldType.FILES,
  [EFieldOptions.ACTION_TYPE]: EFieldType.SELECTOR,
  [EFieldOptions.TIME_SAVINGS]: EFieldType.NUMBER,
  [EFieldOptions.RESPONSIBLE_FOR_IMPLEMENTATION]: EFieldType.DROPDOWN,

};

export type Stepper = IConfig;

export function getStepperPath(initiative: EInitiative): string {
  return `assets/data/configurations/c_${initiative.toLowerCase()}.json_`;
}

export function getLocalStoragePath(filename: string): string {
  return `assets/data/${filename.toLowerCase()}.json_`;
}


