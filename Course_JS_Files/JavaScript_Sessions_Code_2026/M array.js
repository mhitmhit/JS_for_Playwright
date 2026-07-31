

//Array: collections of data:
//data: similar data type : Homogeneous
//data: different data type : Hetrogenous

let num = [1, 2, 3, 4, 5]; //5; 0-4
console.log(num.length);

let len = num.length;
console.log("Hi = ", len - 1);
console.log("Li = ", 0);

console.log(num[0]);
console.log(num[4]);
console.log(num[5]);//undefined
console.log(num[10]);//undefined
console.log(num[-1]);//undefined

console.log('-------------part 1');
console.log(num);
num[0] = 10;
num[4] = 50;
console.log(num);

console.log('-------------part 2');
console.log(num);
num[10] = 100;
console.log(num);
console.log(num.length);

console.log(num[5]);

num[50] = 1000;
console.log(num);
console.log(num.length);


console.log('-----------part 3');
// negative index gets added as a key:property value.
// len counts the number of values only. key:prop are not counted in length;
let marks = [10, 20, 30, 40];

console.log(marks);

marks[-1] = 5;

console.log(marks);

console.log(marks.length);//4

console.log(marks[-1]);
//key: value
//-1: 5

marks[-100] = 9000;
console.log(marks);

console.log(marks.length);

marks[100] = 400;
console.log(marks);
console.log(marks.length);

//string array:
let products = ['macbook pro', 'imac', 'iphone 17', 'canon', 'macbook air'];
console.log(products);
console.log(products.length);

console.log(typeof products); //object

//emp data:
let empData = ['vivek', 30, 23.44, true];
console.log(empData);
console.log(empData[0]);

//---------------------//



let number = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(number);


//iterate the array: using for loop:
for (let i = 0; i <= number.length - 1; i++) {
    console.log(number[i]);
}

console.log('-----------------part 4');

for (let i = number.length - 1; i >= 0; i--) {
    console.log(number[i]);
}

//for .. of
// for ..in
//forEach
//map, reduce, fitler


let pop = [];
//console.log(pop.length);//0

pop[100] = 1000;
// console.log(pop.length);
// console.log(pop);

for (let i = 0; i <= pop.length - 1; i++) {
    console.log(pop[i]);
}




let num = [1, 2, 3, 4, 5];

let i = 0;
while (i <= num.length - 1) {
    console.log(num[i]);
    i++;
}


//for ...of
//for each
//for .. in


let arr = [1, 2, 3, 4, 5];
arr[-1] = 100;
arr[-2] = 300;
console.log(Object.getOwnPropertyNames(arr));
console.log(arr[-1]);
