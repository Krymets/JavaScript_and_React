'use strict';

let a = 5,
    b = a;

b = b + 5;

console.log(b, a); // 10 5

const obj = {
    a: 5,
    b: 1
}

const copy = obj;

copy.a = 10

console.log(copy); // { a: 10, b: 1 }
console.log(obj); // { a: 10, b: 1 }

function copyF(mainObject) {
    let objCopy = {};

    let key;
    for (key in mainObject) {
        objCopy[key] = mainObject[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyF(numbers);

newNumbers.a = 10;
console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }
console.log(numbers); // { a: 2, b: 5, c: { x: 7, y: 4 } }

newNumbers.c.x = 10; // x: 10 numbers

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // { a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 }
const clone = Object.assign({}, add);
console.log(clone); // { d: 17, e: 20 }


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'dsgsdgsg'
console.log(newArray); // [ 'a', 'dsgsdgsg', 'c' ]
console.log(oldArray); // [ 'a', 'b', 'c' ]

const video = ['youtube', 'vimeo', 'tube'],
    blogs = ['wordpress', 'lifejournal', 'blogger'],
    internet = [...video, ...blogs, 'instagram', 'facebook'];
console.log(internet); // [
//   'youtube',
//   'vimeo',
//   'tube',
//   'wordpress',
//   'lifejournal',
//   'blogger',
//   'instagram',
//   'facebook'
// ]

function log(a, b, c) {
    console.log(a, b, c);
}

const num = [2, 5, 7];

log(...num); // 2 5 7

const array = ['a', 'b'];

const newAaaarray = [...array];

const qq = {
    one: 1,
    two: 2
};

const newObj = {...qq};
console.log(newObj); // { one: 1, two: 2 }
