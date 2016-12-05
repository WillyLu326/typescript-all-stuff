/**
 * Created by zhenglu on 12/2/16.
 */
let bankAccount: {money: number, deposit: (val: number) => void} = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

type BankAccount = {money: number, deposit: (val: number) => void };

let myself: {name: string, bankAccount: BankAccount, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

let variable: string = null;

console.log(variable);


// Rest & Spread
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max.apply(null, numbers)); // using apply to pass parameter
console.log(Math.max(...numbers)); // ... is called spread operator

function makeArray(arg1: number, arg2: number) {
    return [arg1, arg2];
}
console.log(makeArray(1, 2));

function makeArray2(...args: number[]) { // this ... is called rest operator
    return args;
}
console.log(makeArray2(1, 2, 3, 4));


// Destructuring Array
const hobbies = ['Cooking', 'Gym'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1 + ' ' + hobby2);


// Template Literals
const username: string = 'Willy Lu';
const age: number = 27;
console.log(`Hello ${ username }, your age is ${ age }.`);

// Exercise
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);

