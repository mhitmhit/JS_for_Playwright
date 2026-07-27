

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


//simple function
//function expression
//anoynymous function
//IIFE
//arrow functions
//callback functions
//aysnc await functions

