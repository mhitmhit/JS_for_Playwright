
//Promise:
//1. Pending 
//2. resolve -- fullfillment -- return the resource(data)
//3. rejected -- reason (error reason)

//create a Promise: using Promise

let pizzaPromise = new Promise((resolve, reject) => {

    //do something here.....
    let success = true;
    if (success) {
        resolve('Pizza');
    }
    else {
        reject('delivery boy is not available....');
    }
});

pizzaPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log('close the app...'));

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

//click -- promises with wait(30 secs)
//fill -- promises 
//textContent()
//goto(url)

//locactor().click();

//let header = await textContent();

//callback hell ----> Promises ----> async await



function getNumber() {
    return Promise.resolve(100);
}

getNumber()
    .then(result => console.log(result));


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




let myPromise = new Promise(resolve => {
    reject('404 error');
});

myPromise.catch(res => console.log(res));