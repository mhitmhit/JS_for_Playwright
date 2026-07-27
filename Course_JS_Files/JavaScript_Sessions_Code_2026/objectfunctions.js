
let emp = {
    name: 'Shree',
    age: 30,
    salary: 12.33,
    coding() {
        console.log(this.name, ' is coding');
        console.log(name);
    },
    testing() {
        console.log(emp.name, ' is testing');
        this.coding();
    },
    printData(x, y) {
        return x + y;
    },
    data: function () {
        console.log('hello ', this.name);
    },

    reading: () => {
        console.log(emp.name, 'reading method.....');
    }
}

console.log(emp.name, emp.age, emp.salary);
emp.coding();
emp.testing();
let r1 = emp.printData(100, 200);
console.log(r1);
emp.data();
emp.reading();


//POM
let loginPage = {
    username: '#username',
    password: '#password',
    loginBtn: '//input[@id="login"]',

    doLogin(appusername, apppassword) {

    },
    forgotPwd() {

    },
    getFooters() {

    }

};

//object destructruing:
let user = {
    name: 'Tom',
    age: 30,
    address: {
        flat: 101,
        apartment: 'new apt',
        city: 'LA',
        location: {
            lat: 12.33,
            long: 45.44
        }
    },
    coding() {
        console.log(user.address.location.lat, ' is coding');
        console.log(this.address.location);
    }
};


let { name, address: { flat, location: { lat, long } } } = user;
console.log(name, flat, lat, long);
