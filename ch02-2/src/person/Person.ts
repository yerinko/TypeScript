let MAX_ATE = 100;

export interface IPerson {
    name: string;
    age: number
}


class person implements IPerson {
    constructor(public name: string, public age: number) {}
}

function makeRandomNumbr(max: number = MAX_AGE) : number {
    return Math.ceil((Math.random() * max))
}

export const makePerson = (name: string,
                    age:number = makeRandomNumber()) => ({name, age});
