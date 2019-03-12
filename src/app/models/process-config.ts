import { FormControl } from '@angular/forms';

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
    initiative: string;
    title: string;
    type: EInitiative;
    process: IProcess;
}

export interface IProcess {
    section1: EFieldOptions[];
    section2: EFieldOptions[];
    section3: EFieldOptions[];
}

export enum EFieldType {
    FREETEXT = 'text',
    DROPDOWN = 'user',
    DATE = 'date',
    NUMBER = 'number'
}

const fieldTypeLookup = {
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

export const config = {
    title: {
        type: EFieldOptions.TITLE,
        title: 'Titel der Idee',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    author: {
        type: EFieldOptions.AUTHOR,
        title: 'Autor der Idee',
        connection: EQueryable.USERS,
        icon: EMaterialIcons.PERSON,
        componentAvailable: true,
    },
    champion: {
        type: EFieldOptions.CHAMPION,
        title: 'Multiplikator',
        icon: EMaterialIcons.SETTINGS,
        componentAvailable: true,
    },
    department: {
        type: EFieldOptions.DEPARTMENT,
        title: 'Abteilung',
        connection: EQueryable.DEPARTMENTS,
        icon: EMaterialIcons.ACCESSIBILITY,
        componentAvailable: true,
    },
    comment: {
        type: EFieldOptions.COMMENT,
        title: 'Titel der Idee',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    completion_date: {
        type: EFieldOptions.COMPLETION_DATE,
        title: 'Enddatum',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    start_date: {
        type: EFieldOptions.START_DATE,
        title: 'Startdatum',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    problem_description: {
        type: EFieldOptions.PROBLEM_DESCRIPTION,
        title: 'Problembeschreibung',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    solution: {
        type: EFieldOptions.SOLUTION,
        title: 'Lösung',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    tags: {
        type: EFieldOptions.TAGS,
        title: 'Stichwörter',
        icon: EMaterialIcons.ACCESSIBILITY,
        componentAvailable: true,
        connection: EQueryable.TAGS,
    },
    consequences: {
        type: EFieldOptions.CONSEQUENCES,
        title: 'Konsequenzen',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    expected_result: {
        type: EFieldOptions.EXPECTED_RESULT,
        title: 'Erwartetes Ergebnis',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    innovationpoints: {
        type: EFieldOptions.INNOVATIONPOINTS,
        title: 'Innovationspunkte',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    methods_used: {
        type: EFieldOptions.METHODS_USED,
        title: 'Genutzte Methoden',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
        connection: EQueryable.METHODS_USED,
    },
    types_of_waste: {
        type: EFieldOptions.TYPES_OF_WASTE,
        title: 'Verschwendungsarten',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    }
}

export function getFieldType(field: IField): EFieldType {
    return fieldTypeLookup[field.type];
}

export function getConfigFor(field: string): IField {
    return config[field];
}