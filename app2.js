// type strict
var person = {
    firstName: 'Willy',
    hobbies: ['Cooking', 'Gym'],
    sayHi: function (greet) {
        console.log("Hi " + greet);
    }
};
console.log(person);
// Class implementation with interface
var AgedPerson = (function () {
    function AgedPerson() {
        this.firstName = 'Willy';
        this.age = 27;
    }
    AgedPerson.prototype.sayHi = function (greet) {
        console.log('AgedPerson ' + greet);
    };
    return AgedPerson;
}());
var ap = new AgedPerson();
console.log(ap);
var doubleFunction = function (num1, num2) { return (num1 + num2) * 2; };
console.log(doubleFunction(10, 20));
