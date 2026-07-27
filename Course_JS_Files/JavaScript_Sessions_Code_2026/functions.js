
//a piece of code which is doing something/logic...resuable

//function/method
//function without class : function
//function within a class: method

//1. simple function: 
//zero input param, no return (void)

function test() {
    console.log('hello test');
}

console.log(typeof test); //function

//call function:
test();
console.log('bye!!!');

function click() {
    console.log('click on the element');
}
click();

//2. zero input, but some return:
//zero input param; return type: number
function getNumber() {
    console.log('getting some number');
    return 100;
}

console.log(getNumber());
let res = getNumber();
console.log(res + 100);

//name: launchBrowser, type: boolean; ip param: 0
function launchBrowser() {
    console.log('launching chrome');
    return false;
}

let isLaunched = launchBrowser();
console.log(isLaunched);

if (isLaunched) {
    console.log('enter the url: https://www.google.com');
}
else {
    console.log('no need enter url');
}

function getTrainerName() {
    return 'Naveen';
}

let name = getTrainerName();
console.log(name);
console.log(getTrainerName);
console.log(typeof getTrainerName); //function

//3. some input param and some return:
//input params: 2; return type: any
function add(x, y) {
    console.log('adding two numbers....');
    let z = x + y;
    return z;
}

let m1 = add(10, 20);
console.log(m1);

let m2 = add(100, 'Naveen');
console.log(m2);

let m3 = add('hello', 'world');
console.log(m3);

//
function calculateBilling(foodBill, drinksBill, tax) {
    console.log('calculating the billing amount...');
    return foodBill + drinksBill + tax;
}

let totalAmt = calculateBilling(1000, 500, 50);
console.log(totalAmt);

totalAmt = calculateBilling(2000, 600, 0);
console.log(totalAmt);

totalAmt = calculateBilling(5000, 1000);
console.log(totalAmt);


//
console.log('----------------');

//WAF: AC
//launch a browser: 
//input params: (browserName): valid: chrome, firefox, edge, safari
//return true
//print: browser is launched successfully
//return: true/false (boolean)
//wrong browserName: print: invalid browser, return false

/**
 * 
 * @param {string} browserName 
 * @returns 
 */
function launchBrowser(browserName) {//CHROME
    console.log('launching browser....' + browserName);

    switch (browserName.trim().toLowerCase()) { //chrome
        case 'chrome':
            console.log('chrome browser is launched successfully');
            return true;
        case 'edge':
            console.log('edge browser is launched successfully');
            return true;
        case 'safari':
            console.log('safari browser is launched successfully');
            return true;
        case 'firefox':
            console.log('firefox browser is launched successfully');
            return true;
        default:
            console.log('invalid browser...', browserName);
            console.log('plz pass the valid browser name: chrome, firefox, edge, safari');
            return false;
    }
}

//call the function:
let isBrowserLaunched = launchBrowser('chrome');
console.log(isBrowserLaunched);

if (isBrowserLaunched) {
    console.log('enter url : https://www.nal.com');
}

//name: printing
function printing() {//0
    console.log('printing 1');
}

function printing(name) {//1
    console.log('printing 2');
    console.log('bye');
}


function printing(name, age) {//2
    console.log('printing 2');
    console.log('bye');
}

//printing('naveen');
printing('tom', 20);


