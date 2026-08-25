
//static in class:

class Employee {

    static compName = "Google";

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
    }

    reading() {
        console.log(this.name, ' is reading');
        return 100;
    }

    static billing() {
        console.log('billing method');
    }

};

let emp = new Employee('Tom', 30, 12.33, true);
console.log(emp.name, emp.age, emp.salary, emp.isActive);
console.log(Employee.compName);
Employee.compName = 'IBM';
console.log(Employee.compName);
Employee.billing();


let emp1 = new Employee('peter', 30, 12.33, true);
let emp2 = new Employee('ravi', 30, 12.33, true);


