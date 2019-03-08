
export enum EFieldOptions {
    AUTHOR,
    COMMENT,
    COMPLETION_DATE,
    START_DATE,
    DEPARTMENT,
    PROBLEM_DESCRIPTION,
    SOLUTION,
    TAGS,
    TITLE,
    CHAMPION,
    CONSEQUENCES,
    EXPECTED_RESULT,
    INNOVATIONPOINTS,
    METHODS_USED,
    TYPES_OF_WASTE
}

export enum EQueryable {
    DEPARTMENTS = 'departments',
    USERS = 'users',
    NOQUERY = 'noquery'
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
    ACCESSIBILITY = 'accessibiliy',
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
    [EFieldOptions.PROBLEM_DESCRIPTION]: EFieldType.DROPDOWN,
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
        componentAvailable: false,
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
        type: EFieldOptions.TITLE,
        title: 'Titel der Idee',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: false,
    },
    completion_date: {
        type: EFieldOptions.TITLE,
        title: 'Titel der Idee',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: false,
    },
    start_date: {
        type: EFieldOptions.TITLE,
        title: 'Titel der Idee',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: false,
    },
    problem_description: {
        type: EFieldOptions.TITLE,
        title: 'Titel der Idee',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: false,
    },
    solution: {
        type: EFieldOptions.TITLE,
        title: 'Titel der Idee',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: false,
    },
    tags: {
        type: EFieldOptions.TITLE,
        title: 'Titel der Idee',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: false,
    },
    consequences: {
        type: EFieldOptions.TITLE,
        title: 'Titel der Idee',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: false,
    },
    expected_result: {
        type: EFieldOptions.TITLE,
        title: 'Titel der Idee',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: false,
    },
    innovationpoints: {
        type: EFieldOptions.TITLE,
        title: 'Titel der Idee',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: false,
    },
    methods_used: {
        type: EFieldOptions.TITLE,
        title: 'Titel der Idee',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: false,
    },
    types_of_waste: {
        type: EFieldOptions.TITLE,
        title: 'Titel der Idee',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: false,
    }
}

export function getFieldType(field: IField): EFieldType {
    return fieldTypeLookup[field.type];
}

export function getConfigFor(field: string): IField {
    return config[field];
}