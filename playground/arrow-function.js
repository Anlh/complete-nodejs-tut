const square = x => x * x;
console.log(square(2)); // 4

// Avoid using arrow function whens using object literal syntax, unless we don't need the this context
const user = {
    name: 'Helder',
    sayHi: () => { // This keyword is binded to the global scope
        console.log(`Hello ${this.name}`);
        console.log(this);
    },
    sayHiAlt() { // This bind this to the current context of the user
        console.log(`Hello ${this.name}`);
    }
};

user.sayHi();
user.sayHiAlt();