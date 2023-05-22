'use strict';

const str = 'test';
const arr = [1, 2, 4];
console.log(str.length); // 4
console.log(arr.length); // 3
console.dir(Number);

console.log(str[2]); // s

console.log(str.toUpperCase()); // TEST
console.log(str.toLowerCase()); // test

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); // 5 begin at 5. -1 if not found

const logg = 'Hello World';
console.log(logg.slice(6, 11)); // World
console.log(logg.slice(6)); // World
console.log(logg.slice(-5)); // World
console.log(logg.slice(-5, -1)); // Worl

console.log(logg.substring(6, 11)); // World

console.log(logg.substr(6, 5)); // World

const num = 12.2;
console.log(Math.round(num)); // 12

const test = '12.2px';
console.log(parseInt(test)); // 12
console.log(parseFloat(test)); // 12.2
