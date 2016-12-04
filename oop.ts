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


// Getter & Setter
class Plant {
    private _species: string = 'Default';

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Default';
        }
    }
}

const plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);



// Static Properties and Methods
class Helper {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return diameter * this.PI;
    }
}

console.log(2 * Helper.PI);
console.log(Helper.calcCircumference(2));


// Abstract Class
abstract class Project {
    projectName: string = 'Default';
    budget: number = 1000;
    type: string;

    abstract changeProjectName(name: string): void;

    calcBudget(): number {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeProjectName(name: string) {
        this.projectName = name;
    }
}

const it = new ITProject();
console.log(it);
it.changeProjectName('IT Project');
console.log(it);