// used for parsing responses from HYPE
// could possibly be obsolete in the future (when format is changed to JSON)
export interface IHypeTableUsers {
    obje
}

export interface IHypeTableDepartments {
    columns: string[];
    rows: string[][];
}

export interface IHypeTableUser {
    username: string;
    forename: string;
    surname: string;
    email: string;
}

export interface IHypeTableDepartment {
    username: string;
}

