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
