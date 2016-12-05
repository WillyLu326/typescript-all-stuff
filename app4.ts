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
class Visitor {

}