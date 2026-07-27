//Mutator Methods: 
//1. push: add the element to the end of the array
let num = [1, 2, 3, 4, 5];
console.log(num.length);//5

let e1 = num.push(100);
console.log(num);
console.log(e1);//6

//2. pop: remove the last element 
let num = [1, 2, 3, 4, 5];
let t1 = num.pop();
console.log(t1);
console.log(num);


//3. unshift: add to the beginning of the array:
let cart = ['imac', 'samsung', 'iphone', 'macbook'];
cart.unshift('macbook air');
console.log(cart);

//4. shift: remove the 1st element
let cart = ['imac', 'samsung', 'iphone', 'macbook'];
cart.shift();
console.log(cart);

//5. splice: add, remove, replace:
//splice(startindex, deletecount, itme(s))
let cart = ['imac', 'samsung', 'iphone', 'macbook'];
//cart.splice(0, 0, 'Naveen');
// console.log(cart);

// cart.splice(0, 0, 'Naveen', 'Tom');
// console.log(cart);

// cart.splice(0, 2, 'canon');
// console.log(cart);

// cart.splice(2, 1, 'canon');
// console.log(cart);

// cart.splice(0, cart.length, 'canon');
// console.log(cart);

// cart.splice(cart.length - 1, 1, 'canon');
// console.log(cart);

// cart.splice(2, 0, 'mouse');
// console.log(cart);

//6. slice:
let cart = ['imac', 'samsung', 'iphone', 'macbook', 'keyboard'];
// let newCart = cart.slice(0, 4);
// console.log(newCart);

// let newCart = cart.slice(2);
// console.log(newCart);

let newCart = cart.slice(-2);
console.log(newCart);

//7. reverse:
let cart = ['imac', 'samsung', 'iphone', 'macbook', 'keyboard'];
cart.reverse();
console.log(cart);

//8. indexof:

let cart = ['imac', 'samsung', 'iphone', 'macbook', 'keyboard'];
let i = cart.indexOf('imac');//0
console.log(i);

i = cart.indexOf('naveen');//-1
console.log(i);

let cart = ['imac', 'samsung', 'iphone', 'imac', 'macbook', 'keyboard', 'imac'];

let k = cart.indexOf('imac');//1st occurrence of imac
console.log(k);//0

//2nd occurrence of imac:
let p = cart.indexOf('imac', k + 1);
console.log(p);//3

//3rd occurrence of imac:
let m = cart.indexOf('imac', p + 1);
console.log(m);

console.log(cart.lastIndexOf('imac'));

//find out index of all imac using loop
let cart = ['imac', 'samsung', 'iphone', 'imac', 'macbook', 'keyboard', 'imac', 'tom'];
let i = 0;
while (i <= cart.length - 1) {
    let p = cart.indexOf('imac', i);
    if (p == -1) break;
    console.log(p);
    i = p + 1;
}

//9. includes:
let num = [1, 2, 3, 4, 5];
console.log(num.includes(3));
console.log(cart.includes('iphone'));

//10. join: joins all the elements into a string with a separator:
let arr = ['Naveen', 'Automation', 'Labs'];
let newArr = arr.join('-');
console.log(newArr);

//11. toString:
let arr = ['Naveen', 'Automation', 'Labs'];
console.log(arr.toString());
console.log(arr);

//12. at: element at a given index..it supports negtive index
let num = [1, 2, 3, 4, 5];

console.log(num.at(-1));//5
console.log(num.at(-5));//1
console.log(num[-1]);//undefined

//13. forEach method: 
let cart = ['imac', 'samsung', 'iphone', 'macbook', 'keyboard', 'tom'];

cart.forEach((e) => {
    console.log(e.toUpperCase());
});

cart.forEach((e) => {
    console.log(e.length);
});

let num = [1, 2, 3, 4, 5];
num.forEach((e) => console.log(e * 2));