

//anonymous function: a function that has no name:
//no name:
//expression name: test

let test = function () {
    console.log('hello');
}

//calling it using expression name
test();

//
let add = function (x, y) {
    return x + y;
};

let r1 = add(100, 200);
console.log(r1);

console.log(add.name);//add
//

/**
 *
 * @param {string} browserName
 */
let launchBrowser = function (browserName) {
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('chrome is launched');
            return true;
        case 'edge':
            console.log('edge is launched');
            return true;
        case 'firefox':
            console.log('ff is launched');
            return true;
        default:
            console.log('invalid browser');
            return false;
    }
}

let flag = launchBrowser('chrome');
console.log(flag);

//advanced version of anonymous function: arrow functions: =>
