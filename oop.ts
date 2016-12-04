/**
 * Created by zhenglu on 12/4/16.
 */
class Person {
    name: string;
    private type: string;
    protected age: number = 27;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    public printAge() {
        console.log(this.age);
    }

    public setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const p = new Person('Willy', 'willy');
console.log(p);
p.printAge();
p.setType('Person Object');

// Inheritance
class Willy extends Person{

    constructor(username: string) {
        super('Willy', username);
        this.age = 22;
    }
}

const w = new Willy('willy');
console.log(w);
w.printAge();
w.setType('Willy Object');