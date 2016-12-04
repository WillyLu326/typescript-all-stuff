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
function makeArray(arg1, arg2) {
    return [arg1, arg2];
}
console.log(makeArray(1, 2));
function makeArray2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return args;
}
console.log(makeArray2(1, 2, 3, 4));
// Destructuring Array
var hobbies = ['Cooking', 'Gym'];
var hobby1 = hobbies[0], hobby2 = hobbies[1];
console.log(hobby1 + ' ' + hobby2);
// Template Literals
var username = 'Willy Lu';
var age = 27;
console.log("Hello " + username + ", your age is " + age + ".");
// Exercise
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);
