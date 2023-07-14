'use strict';

let number = 5; debugger

logNumber();  // 5

function logNumber() {
    // let number = 4; debugger // 4, 4
    console.log(number);
}

number = 6;

logNumber(); debugger  // 6

number = 8;

logNumber(); debugger  // 8


function createCounter() {
    let counter = 0;

    const myFunction = function () {debugger
        counter += 1;debugger
        return counter; debugger
    }
    return myFunction;
}
debugger
const increment = createCounter();debugger
const c1 = increment();debugger
const c2 = increment();debugger
const c3 = increment();debugger

console.log(c1, c2, c3); // 1 2 3
console.log(typeof(NaN))





