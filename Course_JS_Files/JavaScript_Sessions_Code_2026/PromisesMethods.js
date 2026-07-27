function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = false;
            if (flag) {
                resolve(1000);
            }
            else {
                reject('some error');
            }
        }, 2000);
    })
};

function getTrainerName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('naveen');
        }, 2000);
    })
};

function getResponseCode() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('200 ok');
        }, 2000);
    })
};

//1. Promise.all() --> "All or nothing"..
//waits for ALL promises to succeed. If even one fails...the whole thing failed immediately...---fail-fast

//Promise.all([p1, p2, p3])
Promise.all([getResponseCode(), getTrainerName(), getNumber()])
    .then((result) => console.log('ALL Resolved:', result))
    .catch((error) => console.log('Failed:', error));


//2. Promise.race() --> who is finishing the finish line...
// Promise.race([getResponseCode(), getTrainerName(), getNumber()])
//     .then((result) => console.log('ALL Resolved:', result))
//     .catch((error) => console.log('Failed:', error));

//3. Promise.allSettled() --> Tell me everything
//wait for all the promises to finish...either resolved or rejected...
// Promise.allSettled([getResponseCode(), getTrainerName(), getNumber()])
//     .then((result) => console.log('ALL Resolved:', result))
//     .catch((error) => console.log('Failed:', error));

//4. Promise.any() --> "I just need one Winner"
//returns the 1st promise to succeed...ignores the failures...   
// Promise.any([getResponseCode(), getTrainerName(), getNumber()])
//     .then((result) => console.log('ALL Resolved:', result))
//     .catch((error) => console.log('Failed:', error));


//Promise.all([p1, p2, p3])
// try {
//     let [a, b] = await Promise.all([getResponseCode(), getTrainerName(), getNumber()]);
//     console.log(a, b);
// }
// catch (error) {
//     console.log(error);
// }


//await click(ele) retruns promise (5000) ---> customClick() 