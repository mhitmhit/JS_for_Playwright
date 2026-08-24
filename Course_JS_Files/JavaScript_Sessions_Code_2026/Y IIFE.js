

//IIFE: Immediately Invoked function expression
//anonymous function: no name of the function
//this function will be invoked(called) by itself

// (function () {
//     console.log('Hello World');
// })();

(() => {
    console.log('hello');
})();

(function () {
    console.log('hello world');
})();

(function (username) {
    console.log('hello ', username);
})('Naveen');


(function (name, age) {
    console.log(name, age);
})('naveen', 10);

let result = (function (x, y) {
    return x + y;
})(100, 200);

console.log(result);//300
//
let flag = ((browserName) => {
    console.log('hello world', browserName);
    console.log('bye');
    return true;
})('chrome');

console.log(flag);



//simple function:
function m1() {
    console.log('m1 function');
    m2();
}

//function expression: simple function saved in a variable
let getData = function gettingUserDetailsFromDashboardPage(name) {
    console.log('hello user details', name);
}

//anoynymous function: doesnt have a name, saved in a variable
let add = function (x, y) {
    return x + y;
};

//IIFE: doesnt have a name, immidiatly invoked
(() => {
    console.log('hello');
})();

or

(function () {
    console.log('hello world', username);
})("username");

//arrow functions: doenst have a name, annonymous
() => {
    console.log('hello naveen');
}

//callback functions

//aysnc await functions
