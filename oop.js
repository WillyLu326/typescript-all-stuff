var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
// Inheritance
var Willy = (function (_super) {
    __extends(Willy, _super);
    function Willy(username) {
        _super.call(this, 'Willy', username);
        this.age = 22;
    }
    return Willy;
}(Person));
var w = new Willy('willy');
console.log(w);
w.printAge();
w.setType('Willy Object');
// Getter & Setter
var Plant = (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);
// Static Properties and Methods
var Helper = (function () {
    function Helper() {
    }
    Helper.calcCircumference = function (diameter) {
        return diameter * this.PI;
    };
    Helper.PI = 3.14;
    return Helper;
}());
console.log(2 * Helper.PI);
console.log(Helper.calcCircumference(2));
