

function test(name) {
    console.log(name);
}

console.log(test.name);


//call by value
test('Tom');//calling a func by passing a value
test(100);


//call by reference: Object reference

let user = {
    name: 'Tom',
    age: 30,
    salary: 12.33,
    isActive: true
};


function getUserDetails(userObj) {
    console.log(userObj.name, userObj.age);
    console.log(userObj);
    userObj.name = 'Peter';
}

console.log(user.name);//Tom

getUserDetails(user);//call function by passing object ref...

console.log(user.name);//Peter

//destructuring concept: ************************************************************

//4 key-value pairs
let person = {
    name: 'Tom',
    age: 30,
    salary: 12.33,
    isActive: true
}

function getPersonData({ name, age, salary }) {
    console.log(name, age, salary);
}

//calling function:
getPersonData(person);

function getData({ name }) {
    console.log(name);
}

getData(person);

//
let person = {
    name: 'Tom',
    age: 30,
    salary: 12.33,
    isActive: true
}

let { name, age } = person;
console.log(name, age);//Tom 30

let { name: username, age: userage } = person;
console.log(username, userage);

console.log("-------------------");
console.log(person);
username = "ali";
console.log(username);
