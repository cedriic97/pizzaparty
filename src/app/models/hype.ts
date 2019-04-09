export interface ICurrentUser {
    userId: string;
    department: string;
    initiative: EInitiative;
}

export enum EInitiative {
    BIOBASEL = 'biobasel',
    CIP = 'cip',
    CIP_HR = 'cip-hr',
    FIT4CIP = 'fit4cip',
    FIVE = 'five',
    LPSPZ = 'lpspz',
    GOLEAN_BRANCHBURG = 'golean-branchburg',
    GOLEAN_DOZ = 'golean-doz',
    GOLEAN_FIT = 'golean-fit',
    GOLEAN_MOVE = 'golean-move',
    GOLEAN_RDSZ = 'golean-rdsz',
    GOLEAN_RTD = 'golean-rtd',
    GOLEAN_TOPINOPS = 'golean-topinops',
    IMPROVE = 'improve',
    KVPHARMA = 'kvpharma',
    PTDE = 'ptde',
    RND_RTD = 'rnd-rtd',
    DEFAULT = 'default'
}

// used for parsing responses from HYPE
// could possibly be obsolete in the future (when format is changed to JSON) -> Ever?
export interface IHypeTableUser {
  username: string;
  forename: string;
  surname: string;
  email: string;
}

export interface IHypeTableDepartment {
  username: string;
}
