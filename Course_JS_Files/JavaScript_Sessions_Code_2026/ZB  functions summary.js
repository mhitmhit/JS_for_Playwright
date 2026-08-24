
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
