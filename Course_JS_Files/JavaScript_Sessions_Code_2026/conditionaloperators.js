



console.log(10 === 10);

console.log(10 > 5);
console.log(true === true);

let age = 10;

if (age >= 16) {
    console.log('you are eligible for voting');
}
else {
    console.log('you are not eligible for voting');
}

if (true) {
    console.log('hello NAL');
}
else { //dead code/unreachable
    console.log('Bye!!');
}

if (false) { //dead code/unreachable
    console.log('hello NAL');
}
else {
    console.log('Bye!!');
}

//
let isElementPresnet = false; //web page

if (isElementPresnet) {
    console.log('click on the element');
}
else {
    console.log('ele is missing on the page...');
}

// cross browser logic:

let browser = 'chrome';

if (browser === 'chrome') {
    console.log('launch chrome');
}
if (browser === 'firefox') {
    console.log('launch firefox');
}
if (browser === 'edge') {
    console.log('launch edge');
}
if (browser === 'safari') {
    console.log('launch safari');
}
else {
    console.log('plz pass the right browser....');
}

//if - else if:

let browser = 'ie';

if (browser === 'chrome') {
    console.log('launch chrome');
}
else if (browser === 'ie') {
    console.log('launch ie');
}
else if (browser === 'firefox') {
    console.log('launch firefox');
}
else if (browser === 'edge') {
    console.log('launch edge');
}
else if (browser === 'safari') {
    console.log('launch safari');
}
else {
    console.log('plz pass the right browser....');
}

//switch -- case: break


