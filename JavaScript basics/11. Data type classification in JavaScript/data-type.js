'use strict'

let number = 4.6;
console.log(-4/0); // -Infinity
console.log('string' * 9); //NaN

const person = `Alex`; //`` тоже работают

const bool = true; // false

// console.log(something) // null

let und;
console.log(und); // undefined

// const obj = {
//     name: 'Alex',
//     age: 25,
//     isMarried: false
// };
//
// console.log(obj['age']);

//let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []]; // массив
//console.log(arr[0]);

const arr = [1, 2, 3];

console.log(arr[1]);

const obj = {a: 1, b: 2, 3: 33}; // a и 'a' одно и тоже

console.log(obj['a']);
console.log(obj.a);
console.log(obj[3]);

obj.c = '1234';
obj['d'] = '4444';
console.log(obj); // { '3': 33, a: 1, b: 2, c: '1234', d: '4444' }
console.log(obj['c']);
console.log(obj.c);

const y = 'bb'
obj[y] = '11111';

console.log(obj); // { '3': 33, a: 1, b: 2, c: '1234', d: '4444', bb: '11111' }

arr[10] = '23456'; // Не рекомендуется
console.log(arr); // [ 1, 2, 3, <7 empty items>, '23456' ]
console.log(arr[11]); // undefined
console.log(arr[10]); // 23456


const obj2 = {
    a: 'a',
    abc: {
        df: [{a: 2}],
        def: 1
    }
}
console.log(obj2); // { a: 'a', abc: { df: [ [Object] ], def: 1 } }

//Task
let storeName = 'Magaz';
let storeDescription = {
    budget: 10000,
    employees: ['Vasya', 'Petya', 'Kolya'],
    products: {
        product1: 1000,
        product2: 2000
    },
    open: true
};
