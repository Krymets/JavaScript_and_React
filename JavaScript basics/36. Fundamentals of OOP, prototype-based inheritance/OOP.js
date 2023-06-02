'use strict';

let str = 'some';
let strObj = new String(str);

console.log(typeof(str)); // string
console.log(typeof(strObj)); // object

console.dir([1, 2, 3]); // __proto__ in browser

const soldier = {
    health: 400,
    armour: 100,
    sayHello: function () {
        console.log('Hello');
    }
};

// const john = {
//     health: 100
// };
const john = Object.create(soldier); // create


// john.__proto__ = soldier; // old code!!! john prototype soldier
// Object.setPrototypeOf(john, soldier); // new code! john prototype soldier

console.log(john); // { health: 100 }
console.log(john.armour); // 100
john.sayHello(); // Hello


