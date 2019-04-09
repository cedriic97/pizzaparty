import { EFieldOptions, EFieldType, EQueryable, EUnitType, fieldTypeLookup, IField } from './stepper';

export const config = {
    title: {
        type: EFieldOptions.TITLE,
        title: 'TITLE.TITLE',
        description: 'TITLE.DESCRIPTION',
    },
    author: {
        type: EFieldOptions.AUTHOR,
        title: 'AUTHOR.TITLE',
        description: 'AUTHOR.DESCRIPTION',
        connection: {
            source: EQueryable.USERS,
            isLocal: false
        }
    },
    champion: {
        type: EFieldOptions.CHAMPION,
        title: 'CHAMPION.TITLE',
        description: 'CHAMPION.DESCRIPTION',
        connection: {
            source: EQueryable.USERS,
            isLocal: false
        }
    },
    department: {
        type: EFieldOptions.DEPARTMENT,
        title: 'DEPARTMENT.TITLE',
        description: 'DEPARTMENT.DESCRIPTION',
        connection: {
            source: EQueryable.DEPARTMENTS,
            isLocal: false
        }
    },
    comment: {
        type: EFieldOptions.COMMENT,
        title: 'COMMENT.TITLE',
        description: 'COMMENT.DESCRIPTION',
    },
    completion_date: {
        type: EFieldOptions.COMPLETION_DATE,
        title: 'COMPLETION_DATE.TITLE',
        description: 'COMPLETION_DATE.DESCRIPTION',
    },
    start_date: {
        type: EFieldOptions.START_DATE,
        title: 'START_DATE.TITLE',
        description: 'START_DATE.DESCRIPTION',
    },
    problem_description: {
        type: EFieldOptions.PROBLEM_DESCRIPTION,
        title: 'PROBLEM_DESCRIPTION.TITLE',
        description: 'PROBLEM_DESCRIPTION.DESCRIPTION',
    },
    solution: {
        type: EFieldOptions.SOLUTION,
        title: 'SOLUTION.TITLE',
        description: 'SOLUTION.DESCRIPTION',
    },
    consequences: {
        type: EFieldOptions.CONSEQUENCES,
        title: 'CONSEQUENCES.TITLE',
        description: 'CONSEQUENCES.DESCRIPTION',
    },
    expected_result: {
        type: EFieldOptions.EXPECTED_RESULT,
        title: 'EXPECTED_RESULT.TITLE',
        description: 'EXPECTED_RESULT.DESCRIPTION',
    },
    tags: {
        type: EFieldOptions.TAGS,
        title: 'TAGS.TITLE',
        description: 'TAGS.DESCRIPTION',
        connection: {
            source: EQueryable.TAGS,
            isLocal: true
        }
    },
    methods_used: {
        type: EFieldOptions.METHODS_USED,
        title: 'METHODS_USED.TITLE',
        description: 'METHODS_USED.DESCRIPTION',
        connection: {
            source: EQueryable.METHODS_USED,
            isLocal: true
        }
    },
    types_of_waste: {
        type: EFieldOptions.TYPES_OF_WASTE,
        title: 'TYPES_OF_WASTE.TITLE',
        description: 'TYPES_OF_WASTE.DESCRIPTION',
        connection: {
            source: EQueryable.TYPES_OF_WASTE,
            isLocal: true
        }
    },
    picture_before: {
        type: EFieldOptions.PICTURE_BEFORE,
        title: 'PICTURE_BEFORE.TITLE',
        description: 'PICTURE_BEFORE.DESCRIPTION',

    },
    picture_after: {
        type: EFieldOptions.PICTURE_AFTER,
        title: 'PICTURE_AFTER.TITLE',
        description: 'PICTURE_AFTER.DESCRIPTION',
    },
    monetary_costs: {
        type: EFieldOptions.MONETARY_COSTS,
        title: 'MONETARY_COSTS.TITLE',
        description: 'MONETARY_COSTS.DESCRIPTION',
        unit_type: EUnitType.CURRENCY
    },
    monetary_savings: {
        type: EFieldOptions.MONETARY_SAVINGS,
        title: 'MONETARY_SAVINGS.TITLE',
        description: 'MONETARY_SAVINGS.DESCRIPTION',
        unit_type: EUnitType.CURRENCY
    },
    attachments: {
        type: EFieldOptions.ATTACHMENTS,
        title: 'ATTACHMENTS.TITLE',
        description: 'ATTACHMENTS.DESCRIPTION',
    },
    time_savings: {
        type: EFieldOptions.TIME_SAVINGS,
        title: 'TIME_SAVINGS.TITLE',
        description: 'TIME_SAVINGS.DESCRIPTION',
        unit_type: EUnitType.TIME
    },
    action_type: {
        type: EFieldOptions.ACTION_TYPE,
        title: 'ACTION_TYPE.TITLE',
        description: 'ACTION_TYPE.DESCRIPTION',
        connection: {
            source: EQueryable.ACTION_TYPES,
            isLocal: true
        }
    },
    responsible_for_implementation: {
        type: EFieldOptions.RESPONSIBLE_FOR_IMPLEMENTATION,
        title: 'RESPONSIBLE_FOR_IMPLEMENTATION.TITLE',
        description: 'RESPONSIBLE_FOR_IMPLEMENTATION.DESCRIPTION',
        connection: {
            source: EQueryable.USERS,
            isLocal: false
        }
    }
}


export function getFieldType(field: IField): EFieldType {
    return fieldTypeLookup[field.type];
}

export function getConfigFor(field: string) {
    if (config[field]) {
        return config[field];
    }
    return field;

}
