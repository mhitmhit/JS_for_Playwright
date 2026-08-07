

let user = {
    name: 'Vinay',
    age: 30,
    city: 'pune',
    zip: 1212,
};
console.log(user);

//shallow copy/cloning of the object.... problems with nested objects.
// ... spread parameter
// let myUser = { ...user };

// console.log(myUser);
// user.age = 35;

// console.log('--------');
// console.log(user);
// console.log(myUser);

//
let newUser = structuredClone(user);
console.log(newUser);

console.log('----------------');


let customer = {

    name: 'Manish',
    age: 25,
    phone: '98989898',
    salary: 12.33,
    isActive: true,

    address: {
        flat: 101,
        building: 'new building',
        city: 'Bangalore',
        zip: 10101
    }
};

console.log(customer);
// console.log('--------------');
// //copy:
// let newCustomer = { ...customer };
// console.log(newCustomer);

// console.log('----------');
// newCustomer.address.city = 'Pune';
// console.log(newCustomer);
// console.log('----------');
// console.log(customer);

// console.log("----------");

//deep copy : all levels
let newCustomer = structuredClone(customer);
console.log(newCustomer);
newCustomer.address.city = 'Pune';
console.log(newCustomer); //Manish - Pune
console.log(customer); //Manish -- Bangalore
