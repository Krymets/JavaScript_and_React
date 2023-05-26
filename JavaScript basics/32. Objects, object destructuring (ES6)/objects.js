'use strict';

const obj = new Object(); // or {}

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
}
options.makeTest();


const {border, bg} = options.colors;
console.log(border, bg);

console.log(Object.keys(options).length); // 4


console.log(options.name) // test

delete options.name; // delete name: 'test'

console.log(options); // without name: 'test'

let counter = 0;

for (let key in options) {
    counter++;
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Property ${i} have reason ${options[key][i]}`);
        }
    } else {
        console.log(`Property ${key} have reason ${options[key]}`);
    }
}
console.log(counter); // 3
