function getNumber(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(1000);
        }, 1000);
    })
}

function getTrainer(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Naveen');
        }, 2000);
    })
}

function getResponseCode(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('400 error');
        }, 3000);
    })
}

// 1 promise.all() ---- all or nothing
// wait for all promises to succeed. if one fails, the whole thing fails. (fail fast)
Promise.all([getNumber(), getTrainer(), getResponseCode()])
    .then((result)=>{console.log('success in all', result);})
    .catch((error)=>{console.log('error in all', error);})

// 2 promise.race() ---- who is getting to the finish line. regardgless of resolved or rejected
Promise.race([getNumber(), getTrainer(), getResponseCode()])
    .then((result)=>{console.log('success in race', result);})
    .catch((error)=>{console.log('error in race', error);})

// 3 promise.allSettled() ---- tell me result of all either resolved or rejected
Promise.allSettled([getNumber(), getTrainer(), getResponseCode()])
    .then((result)=>{console.log('success in allSettled', result);})
    .catch((error)=>{console.log('error in allSettled', error);})

// 4 promise.any() ---- i just need the resolved winner position.
// returns the 1st promise to succeed... ignores failed promises
Promise.any([getNumber(), getTrainer(), getResponseCode()])
    .then((result)=>{console.log('success in any', result);})
    .catch((error)=>{console.log('error in any', error);})
