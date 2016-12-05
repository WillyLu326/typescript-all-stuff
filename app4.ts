/**
 * Created by zhenglu on 12/5/16.
 */
// Decorator
// Decorator is just a function
function logged(constructor: Function) {
    console.log(constructor);
}

@logged
class User {
    constructor() {
        console.log(`Hi, this is user constructor`);
    }
}

// Factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Visitor {}

// Useful Decorator
function print(constructor: Function) {
    constructor.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)
@print
class Animal {
    name = 'animal';
}
const animal = new Animal();
(<any>animal).print();

// Method Decorator
function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        console.log(target, propName);
        descriptor.writable = value;
    }
}
class Project2 {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    @editable(false)
    printNumber(num: number): number {
        return num;
    }
}

const project2 = new Project2('name');
console.log(project2.printNumber(1000));
project2.printNumber = function(num: number): number {
    return num * 2;
}
console.log(project2.printNumber(1000));
