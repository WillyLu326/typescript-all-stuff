// Exercise 1
class Car {
    public acceleration: number = 0;

    constructor(public name: string) {}

    honk(): void {
        console.log('Toooooooooon');
    }

    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}

const car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
class BaseObject {
    width: number = 0;
    height: number = 0;
}
class Rectangle extends BaseObject{
    constructor() {
        super();
        this.width = 5;
        this.height = 2;
    }

    calcSize(): number {
        return this.height * this.width;
    }
}
const r = new Rectangle();
console.log(r.calcSize());

// Exercise 3
class Person2 {
    private _firstName: string = '';

    get firstName(): string {
        return this._firstName;
    }

    set firstName(name: string) {
        if (name.length > 3) {
            this._firstName = name;
        } else {
            this._firstName = '';
        }
    }
}
const p2 = new Person2();
console.log(p2.firstName);
p2.firstName = 'Ma';
console.log(p2.firstName);
p2.firstName = 'Maximilian';
console.log(p2.firstName);
