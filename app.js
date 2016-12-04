/**
 * Created by zhenglu on 12/2/16.
 */
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
var variable = null;
console.log(variable);
// Rest & Spread
var numbers = [1, 2, 3, 4, 5];
console.log(Math.max.apply(null, numbers)); // using apply to pass parameter
console.log(Math.max.apply(Math, numbers)); // ... is called spread operator
