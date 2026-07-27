
//class: Blueprint, category, template for the objects : Laptop
//object: a physical entity - variables (properties), methods(actions): Macbook, HP, DELL

export class Employee {

    //class variables: global variables
    name;
    age;
    salary;
    isActive;

    //constructor: it will help us to create the object and help us to init the global vars
    //one const.. is allowed
    constructor(name, age, salary, isActive) {
        //this.global = local
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }

    //actions : Methods
    coding() {
        console.log(this.name, ' is coding');
        console.log(url);
    }

    reading() {
        console.log(this.name, ' is reading');
        return 100;
    }

    running = function () {
        console.log(this.name, ' is running');
    }

    printing = () => {
        console.log(this.name, ' is printing');
    }

    add = (a, b) => {
        return a + b;
    }

};

//create the object of the class using new keyword:
//create the object ---> const... of the class will be called
let emp = new Employee('akshay', 30, 23.33, true);
console.log(emp.name, emp.age, emp.salary, emp.isActive);

emp.coding();
let t1 = emp.reading();
console.log(t1);
emp.running();
emp.printing();
let t2 = emp.add(100, 200);
console.log(t2);
//console.log(emp);

console.log('-------------');
//
let emp1 = new Employee();
console.log(emp1.name, emp1.age, emp1.salary, emp1.isActive);

console.log('-------------');
//
let emp2 = new Employee('Tom', 30);
console.log(emp2.name, emp2.age, emp2.salary, emp2.isActive);

console.log('-------------');

// let emp3 = new Employee('Peter', 30, 23.33, false);
// emp3 = null;
// console.log(emp3.name); //null.name -- error