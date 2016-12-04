var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// Exercise 1
var Car = (function () {
    function Car(name) {
        this.name = name;
        this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log('Toooooooooon');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2
var BaseObject = (function () {
    function BaseObject() {
        this.width = 0;
        this.height = 0;
    }
    return BaseObject;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        _super.call(this);
        this.width = 5;
        this.height = 2;
    }
    Rectangle.prototype.calcSize = function () {
        return this.height * this.width;
    };
    return Rectangle;
}(BaseObject));
var r = new Rectangle();
console.log(r.calcSize());
// Exercise 3
var Person2 = (function () {
    function Person2() {
        this._firstName = '';
    }
    Object.defineProperty(Person2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            if (name.length > 3) {
                this._firstName = name;
            }
            else {
                this._firstName = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person2;
}());
var p2 = new Person2();
console.log(p2.firstName);
p2.firstName = 'Ma';
console.log(p2.firstName);
p2.firstName = 'Maximilian';
console.log(p2.firstName);
