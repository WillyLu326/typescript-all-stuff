var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by zhenglu on 12/5/16.
 */
// Decorator
// Decorator is just a function
function logged(constructor) {
    console.log(constructor);
}
var User = (function () {
    function User() {
        console.log("Hi, this is user constructor");
    }
    User = __decorate([
        logged
    ], User);
    return User;
}());
// Factory
function logging(value) {
    return value ? logged : null;
}
var Visitor = (function () {
    function Visitor() {
    }
    Visitor = __decorate([
        logging(true)
    ], Visitor);
    return Visitor;
}());
