import { EFieldOptions, EMaterialIcons, EQueryable, IField, EFieldType, fieldTypeLookup } from './wizard';

export const config = {
    title: {
        type: EFieldOptions.TITLE,
        title: 'TITLE.TITLE',
        description: 'TITLE.DESCRIPTION',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    author: {
        type: EFieldOptions.AUTHOR,
        title: 'AUTHOR.TITLE',
        description: 'AUTHOR.DESCRIPTION',
        connection: EQueryable.USERS,
        icon: EMaterialIcons.PERSON,
        componentAvailable: true,
    },
    champion: {
        type: EFieldOptions.CHAMPION,
        title: 'CHAMPION.TITLE',
        description: 'CHAMPION.DESCRIPTION',
        icon: EMaterialIcons.SETTINGS,
        componentAvailable: true,
    },
    department: {
        type: EFieldOptions.DEPARTMENT,
        title: 'DEPARTMENT.TITLE',
        description: 'DEPARTMENT.DESCRIPTION',
        connection: EQueryable.DEPARTMENTS,
        icon: EMaterialIcons.ACCESSIBILITY,
        componentAvailable: true,
    },
    comment: {
        type: EFieldOptions.COMMENT,
        title: 'COMMENT.TITLE',
        description: 'COMMENT.DESCRIPTION',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    completion_date: {
        type: EFieldOptions.COMPLETION_DATE,
        title: 'COMPLETION_DATE.TITLE',
        description: 'COMPLETION_DATE.DESCRIPTION',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    start_date: {
        type: EFieldOptions.START_DATE,
        title: 'START_DATE.TITLE',
        description: 'START_DATE.DESCRIPTION',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    problem_description: {
        type: EFieldOptions.PROBLEM_DESCRIPTION,
        title: 'PROBLEM_DESCRIPTION.TITLE',
        description: 'PROBLEM_DESCRIPTION.DESCRIPTION',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    solution: {
        type: EFieldOptions.SOLUTION,
        title: 'SOLUTION.TITLE',
        description: 'SOLUTION.DESCRIPTION',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    tags: {
        type: EFieldOptions.TAGS,
        title: 'TAGS.TITLE',
        description: 'TAGS.DESCRIPTION',
        icon: EMaterialIcons.ACCESSIBILITY,
        componentAvailable: true,
        connection: EQueryable.TAGS,
    },
    consequences: {
        type: EFieldOptions.CONSEQUENCES,
        title: 'CONSEQUENCES.TITLE',
        description: 'CONSEQUENCES.DESCRIPTION',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    expected_result: {
        type: EFieldOptions.EXPECTED_RESULT,
        title: 'EXPECTED_RESULT.TITLE',
        description: 'EXPECTED_RESULT.DESCRIPTION',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    innovationpoints: {
        type: EFieldOptions.INNOVATIONPOINTS,
        title: 'INNOVATIONPOINTS.TITLE',
        description: 'INNOVATIONPOINTS.DESCRIPTION',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
    },
    methods_used: {
        type: EFieldOptions.METHODS_USED,
        title: 'METHODS_USED.TITLE',
        description: 'METHODS_USED.DESCRIPTION',
        icon: EMaterialIcons.CANCEL,
        componentAvailable: true,
        connection: EQueryable.METHODS_USED,
    },
    types_of_waste: {
        type: EFieldOptions.TYPES_OF_WASTE,
        title: 'TYPES_OF_WASTE.TITLE',
        description: 'TYPES_OF_WASTE.DESCRIPTION',
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
