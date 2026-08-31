console.log("hello world");
console.log(0-'test');


function doSomething() {
    console.log("inside do something function");
}

doSomething();


let tasker = function porcessSomething(){
    console.log("inside process something function");
}

tasker();


let taskerAnnonymous = function (){
    console.log("inside annonymous tasker function");
}

taskerAnnonymous();


(()=>{
    console.log("inside IIFE FUnction version 1 ");
})();

(function () {
    console.log("inside IIFE Functin version 2");
})();


// callback functions

let cb1 = ()=>{console.log("inside callback functin 1");};

let printer = (callback)=>{
    console.log("inside printer");
    callback();
}

printer(cb1);

setTimeout(()=>{console.log("inside timeout function....");}, 3000);
