import {makeRandomNumber} from '../utils/makeRandomNumber';
import IPerson from "./IPerson";

let MAX_AGE = 100;

export default class Person implements  IPerson {
    constructor(public name: string, public age: number = makeRandomNumber()) {}
}

export const makePerson = (name: string,
                    age: number = makeRandomNumber()): IPerson => ({name, age});

