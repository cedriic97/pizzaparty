// used for parsing responses from HYPE
// could possibly be obsolete in the future (when format is changed to JSON)
export interface HypeTable {
    columns: string[];
    rows: string[][];
}
