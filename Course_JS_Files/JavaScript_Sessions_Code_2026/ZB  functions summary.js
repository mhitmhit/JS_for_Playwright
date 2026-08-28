
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

//callback functions:
// calling a func1 by passing a func2 (func2 is called a callback function)
function testing(callback) {
    console.log('hello');
    callback();
}

function print() {
    console.log('hello world');
}

setTimeout(()=>{
    console.log('doing some work....');
}, 4000);


//aysnc await functions
// callback hell (cb within cb within cb....)  ------solved by-----> promises  -----improved by---> async await
