
export class User {

    //no need to create the class global variables...

    constructor(name, age, salary, isActive) {
        //this.global = local
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }
}


let u1 = new User('Tom', 20, 12.33, true);
console.log(u1.name, u1.age);
console.log(u1);

class Person {

    //default const....0 param const....
    constructor() {
        console.log('default const...');
    }

    constructor(name) {
        console.log('1 param const...', name);
    }
    //SyntaxError: A class may only have one constructor

}

let p1 = new Person('naveen');



class Test {
    name;
    age;
}

let t1 = new Test();
t1.name = 'Naven';

console.log(t1.name);
