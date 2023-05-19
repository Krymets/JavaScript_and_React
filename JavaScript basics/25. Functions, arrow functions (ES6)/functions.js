'use strict';

let num = 20;
function showFirstMassage(text) {
    console.log(text);
    let num = 10;
    console.log(num)
}

showFirstMassage('Hello World!');
console.log(num);

function calc(a, b) {
    return a + b;
    console.log('blablabla'); // unreachable code
}
console.log(calc(4, 3))
console.log(calc(5, 6))
console.log(calc(10, 6))

function ret() {
    let num = 50;
    return num;
}

const  anotherNum = ret();
console.log(anotherNum);

const logger = function () {
    console.log('Hello');
}; // !!!!

logger();


const cal = (a, b) => a + b; // arrow function

function  convert (amount, curr) {
    console.log(curr * amount);
    return curr * amount;
}

convert(500, 28);
convert(500, 32);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();