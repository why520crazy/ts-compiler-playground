import { say } from 'book';

export function say() {}

export interface MyInterface {
    name: string;
}

/** This is abc */
const abc = 'abc-value1';
export class MyExample {
    constructor() {}

    say(name: string) {
        console.log(`hello: ${name}`);
        if (true) console.log(`hello: ${name}`);
    }
}
