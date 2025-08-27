export { };

//
// ES6 Classes
//

class Shape {
    color: number | string;

    constructor(color) {
        this.color = color;
    }

    protected getArea() {
        throw new Error('getArea must be implemented');
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const r = new Rectangle(0, 100, 20);
//console.log(r.getArea());

//
// Destructuring Examples
//

const person = { name: 'John', age: 30, city: 'New York' };
//const { name, age, ...rest } = person;
//console.log(name, age, rest);

//
// Spread and Rest Operators
//

const numbers: number[] = [1, 2, 3, 4, 5];
//const [first, second, ...rest] = numbers;
//console.log(first, second, rest);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//console.log([...arr1, ...arr2]);

//
// Higher Order Functions
//

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
//console.log(sum(1, 2, 3));

const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Charlie', age: 35, active: true }
];
//console.log(users.filter(user => user.active));
//console.log(users.map(user => user.name));
//console.log(users.reduce((sum, user) => sum + user.age, 0));