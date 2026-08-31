
//simple function:-----------------------------------------------------------------------------------------------
function m1() {
    console.log('m1 function');
    m2();
}

//function expression: simple function saved in a variable--------------------------------------------------------
let getData = function gettingUserDetailsFromDashboardPage(name) {
    console.log('hello user details', name);
}

//anoynymous function: doesnt have a name, saved in a variable---------------------------------------------------
let add = function (x, y) {
    return x + y;
};

//IIFE: doesnt have a name, immidiatly invoked--------------------------------------------------------------------
(() => {
    console.log('hello');
})();

or

(function () {
    console.log('hello world', username);
})("username");

//arrow functions: doenst have a name, annonymous-----------------------------------------------------------------
() => {
    console.log('hello naveen');
}

//callback functions:--------------------------------------------------------------------------------------------
// calling a func1 by passing a func2 (func2 is called a callback function)
function testing(callback) {
    console.log('hello');
    callback();
}

function print() {
    console.log('hello world');
}


// settimeout functions:-----------------------------------------------------------------------------------------
setTimeout(()=>{
    console.log('doing some work....');
}, 4000);


// callback hell: when we have multilple functions with callbacks that also have callbacks....-------------------
//callback hell -- pyramid of doom....
startMachine(() => {
    boilWater(() => {
        addCoffeePowder(() => {
            pourInCup(() => {
                serveCoffee(() => {
                    console.log('Your coffee is ready....enjoy it...');
                })
            })
        })
    })
});

// promises:------------------------------------------------------------------------------------------------------
//Promise:
//1. Pending
//2. resolve -- fullfillment -- return the resource(data)
//3. rejected -- reason (error reason)

let carPromise = new Promise((resolve, reject)=>{
    console.log("inside the promise now");
    let age = 19
    if (age>18){
        resolve();
    }else{
        reject();
    }
});


carPromise
    .then(()=>{console.log("promise resolved");})
    .catch(()=>{console.log("promise rejected");})
    .finally(()=>{console.log("promise done....");})


     //
function getUserInfo(userId, timeout) {

    return new Promise((resolve, reject) => {
        console.log('Fetching user data for....', userId);

        setTimeout(() => {
            if (userId <= 0) {
                reject('Invalid user ID....204 No Content');
            }
            else {
                let user = {
                    id: userId,
                    name: 'Shipra',
                    city: 'Pune'
                };
                resolve(user);
            }
        }, timeout);
    });
}

getUserInfo(101, 5000)
    .then((user) => console.log(user))
    .catch((error) => console.log(error))
    .finally(() => console.log('close the DB connection'));

// resolve only promise. resolve is mandatory when we create the promise object.
function getNumber() {
    return Promise.resolve(100);
}

getNumber()
    .then(result => console.log(result));

// reject only promise
function getBrowserError() {
    return Promise.reject('browser is not loaded -- 500 internal error');
}

getBrowserError().catch(error => console.log(error));



//will alwys return a pizza with a resolve promise
function getPizza() {

    return new Promise((resolve) => {
        resolve('veg pizza');
    });
}

getPizza()
    .then(res => console.log(res));



// trick question (first parameter passed in is always the resolve parameter)
let myPromise = new Promise(resolve => {
    reject('404 error');
});

myPromise.catch(res => console.log(res));




//aysnc await functions------------------------------------------------------------------------------------------
// callback hell (cb within cb within cb....)  ------solved by-----> promises  -----improved by---> async await
//async-await: just a syntax on top of JS Promises to improve the callback hell and promises chain.
//to aovid the pyramid of doom...

//async with function --> It will always return a promise
//await with steps.... async functions always return a promise, annoying to get value quickly from that.
//      to get around this, we use await.

//async await ---
//1. if a function is wriiten with async -- alwys returns a promise --> call it using with await
//2. if a function is returning a Promise (resolve, reject) ---> call it using with await - dont need the word Async.
//3. we should not write await without async function
//4. async func -- its not mandatory to have await step --> will alwys return promise
//5. if in a function, you have await steps --- then that function should be async
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: 'Tom', age: 30 });
        }, 2000);
    })
}

//getUser().then(user => console.log(user));

let user = await getUser();
console.log(user);


async function getTrainer() {
    return 'naveen';
}

let trName = await getTrainer();
console.log(trName);
