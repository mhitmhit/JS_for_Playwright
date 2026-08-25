// calling a func1 by passing a func2 (func2 is called a callback function)

function testing(callback) {
    console.log('hello');
    callback();
}

function print() {
    console.log('hello world');
}

//1. calling part: call by passing the function
testing(print);

let coding = function doCoding() {
    console.log('im coding....');
}

//2. calling testing function by passing coding function -- callback
testing(coding);

//3. calling tesing funciton by passing another annoymous function
testing(function () {
    console.log('im running....');
});

//4. calling testing function by passing the arrow annoymous function
testing(() => {
    console.log('hello arrow js');
});


//internal features of calculator
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

//generic function: helper function: utility function
//user facing function
function calcucator(callback, a, b) {
    console.log('doing the calculation....');
    return callback(a, b);
};

//user wants to use this calculator:
let r1 = calcucator(add, 10, 20);
console.log(r1);

r1 = calcucator(sub, 100, 90);
console.log(r1);

r1 = calcucator(mul, 100, 20);
console.log(r1);

r1 = calcucator(div, 100, 20);
console.log(r1);

//
function printing(callback, x, y) {
    console.log('hello printing....');
    callback(x, y);
}

printing((num1, num2) => {
    console.log('hello...', num1 + num2);
}, 100, 200);


printing((num1, num2) => {
    console.log('hello...', num1 + num2);
}, 15, 25);

//

function finding(callback1, callback2, num) {
    console.log('doing something.....');
    callback1(num);
    callback2(num);
}

function coding(num1) {
    console.log('hello coding', num1);
}

function writing(num1) {
    console.log('hello writing', num1);
}

finding(coding, writing, 100);
finding(coding, writing, 200);


//

function click(element) {
    console.log('click on ', element);
}

function perfomAction(callbackAction, element) {
    console.log('do this action');
    callbackAction(element);
}

perfomAction(click, 'loginButton');


//

function getUserDetails(callback, userObj) {
    console.log('getting user details....');
    callback(userObj);
}

//call it:
getUserDetails((user) => {
    console.log(user);
}, { name: 'Manish', age: 30 });


//function
//callbacks
//setTimeOut
//callback hell
//promises
//async await

function get() {
    console.log('GET API');
}

function post() {
    console.log('post API');
}

function put() {
    console.log('put API');
}

function deletecall() {
    console.log('deletecall api');
}

//user facing:
function performAPICAll(callback) {
    callback();
}

performAPICAll(get);
performAPICAll(post);
performAPICAll(put);
performAPICAll(deletecall);

//calling
// makeCoffee(
//     boildwater(){
//         grindBeans({
//             serveCoffee(){

//             }, 200, 300
//     }, 100, 200)
// }, 100, 200)

let num = [1, 2, 3];

num.forEach((e) => {
    console.log(e);
});


function add(x, y) {
    console.log(x + y);
}

add(10);
