/**
 * Created by zhenglu on 12/4/16.
 */
var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var p = new Person('Willy', 'willy');
console.log(p);
p.printAge();
p.setType('Person Object');
