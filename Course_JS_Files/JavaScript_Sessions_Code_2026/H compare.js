

//==  vs ===
// == loose equality : it will check only the value
// === strict equality : it will check value + type

console.log(10 == 10);
console.log(10 == "10");//10 == 10 ==> true
console.log("10" == 10); //10 == 10 ==> true

console.log(10 === 10); //true
console.log("10" === 10); //string === number ==> false

//true = 1
//false = 0
console.log(true == 1); //1 ==1
console.log(true === 1);//boolean bs number
console.log(false == 0); //0==0 true
console.log(0 === false);

console.log("" == 0); //0 == 0
console.log("" === 0); //
console.log([] == 0); //0 == 0
console.log([] === 0);//false

let n1 = 10;
let n2 = "10";
console.log(n1 == n2);
console.log(n1 === n2);

console.log(null == undefined); //true
console.log(null === undefined);//false

console.log(typeof null);//object
console.log(typeof undefined);//undefined

console.log([] == ""); //0 == 0 true
console.log([] === ""); //object === string
console.log([] == []); //121212 == 1212343

console.log([] === []); //121212 == 1212343 //false

console.log(typeof []); //object

console.log("" == ""); //0 == 0 : true
console.log([] == []); //false as it coompares memory address
