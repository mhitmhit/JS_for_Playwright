

//arrow function: anonymous function
//has no name
// ()=>
//has no function keyword
//used in callback function

let print = () => console.log('hello world');
print();//calling function

let pop = () => {
    console.log('hello naveen');
}

pop();

let test = function () {
    console.log('hello world');
}
test();

//arrow function with param:
//param: 1 param --> name
let printInfo = (name) => console.log(name + ' automation');
printInfo('Naveen');

//zero param:
//param: 0
let info = () => console.log('hello world');
info();

//1 param:
//param: 1 - no need to use ()
let printUser = username => console.log('hello ', username);
printUser('naveenautomation');

//param 1:
//param: element
let clickElement = element => {
    console.log('check the ', element, ' is visible');
    console.log('click on the ', element);
    console.log('close the browser');
};

clickElement('loginButton');

//add two numbers:
//two params: x, y
//return x+y

/**
 *
 * @param {number} x
 * @param {number} y
 * @returns
 */
let add = (x, y) => x + y;
let res = add(100, 200);
console.log(res);

let addition = (x, y) => {
    console.log('adding two numbers....');
    let z = x + y;
    return z;
}

let r1 = addition(200, 300);
console.log(r1);

let division = (x, y) => x / y;
let r2 = division(100, 2);
console.log(r2);


let findElement = id => `//div[@id='${id}']`;
let xpath = findElement('naveenopencart');
console.log(xpath);

//launch browser: ch, ff, edge
//browserName: 1 param
//return boolean
//found: true
//not found: invalid browser, false

/**
 *
 * @param {string} browserName
 * @returns
 */
let launchBrowser = (browserName) => {
    console.log('trying to launch ', browserName);
    switch (browserName) {
        case 'chrome':
            console.log('launch chrome');
            return true;
        case 'firefox':
            console.log('launch firefox');
            return true;
        case 'edge':
            console.log('launch edge');
            return true;

        default:
            console.log('invalid browser', browserName);
            return false;
    }
};

let isBrowserLaunched = launchBrowser('IE');
console.log(isBrowserLaunched);
if (isBrowserLaunched) {
    console.log('enter the url: ', 'https://www.nal.com');
}

//
let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

let t1 = sum(100, 200);
console.log(t1);

let t2 = mul(10, 20);
console.log(t2);

//give a string and convert it to lowercase...and return
let convertToLowerCase = name => name.toLowerCase();
let u1 = convertToLowerCase('NAVEEN AUTOMATION LABS')
console.log(u1);

//
/**
 *
 * @param  {...string} empNames
 */
let printEmpList = (...empNames) => {
    console.log(empNames.length);
    console.log(empNames);
};

printEmpList('senthil', 'pooja', 'nitin', 'deepti');

//arrow function with objects:

let user = {
    name: 'tom',
    age: 30,
    salary: 12.33,
    isActive: true
};

let printUserInfo = ({ name }) => {
    console.log(name);
};

printUserInfo(user);





let user = {
    name: "Zain",
    age: 25
};

(function ({ name, age }) {
    console.log(name, age)
})(user);


let result = (function (name, rollNo) {
    return name
})("Zain");

console.log(result);

(function (name, age) {
    console.log(name, age)
})("Zain", 25);


let res = (function (x, y) {
    return x + y
})(3, 4);
console.log(res);
