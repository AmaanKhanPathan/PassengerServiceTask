export interface Ipassenger {
    id : number;
    fullname : string;
    checkedIn : boolean;
    checkInDate : null | number;
    children : null | Ichild[]
}

export interface Ichild {
    name : string;
    age : number
}