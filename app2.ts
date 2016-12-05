/**
 * Created by zhenglu on 12/4/16.
 */
interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    sayHi(greet: string): void;
}

// type strict
const person: NamedPerson = {
    firstName: 'Willy',
    hobbies: ['Cooking', 'Gym'],
    sayHi(greet: string) {
        console.log(`Hi ${ greet }`);
    }
}

console.log(person);

// Class implementation with interface
class AgedPerson implements NamedPerson {
    firstName: string = 'Willy';

    sayHi(greet: string): void {
        console.log('AgedPerson ' + greet);
    }

    age: number = 27;
}

const ap = new AgedPerson();
console.log(ap);


// Function Type
interface FunctionType {
    (num1: number, num2: number): number;
}

let doubleFunction: FunctionType = (num1: number, num2: number) => (num1 + num2) * 2;

console.log(doubleFunction(10, 20));