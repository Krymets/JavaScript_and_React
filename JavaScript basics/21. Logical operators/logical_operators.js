'use strict';

// const hamburger = true;
// const fries = true;
let hamburger = 5; // true === 1
let fries = 0; // false === 0, '', null, undefined, NaN

if (hamburger && fries) {
    console.log('I am full!');
}

console.log((hamburger && fries)); // true

hamburger = 3;
fries = 1;
let cola = 4;

console.log((hamburger === 3 && fries === 1 && cola)); // return 0 if false, return last if true (4)

if (hamburger === 3 && fries === 1 && cola) { // or just fries
    console.log('All full!');
} else {
    console.log('No');
}

hamburger = 3;
fries = 1;
cola = 0;
let nuggets = 2;

console.log((hamburger || fries || cola)); // return 3 if true. if false - last false

if (hamburger || fries || cola) {
    console.log('All full!');
} else {
    console.log('No');
}

console.log((hamburger === 3 && cola === 2 || fries && nuggets)); // return 2 (nuggets)
if (hamburger === 3 && cola === 2 || fries && nuggets) { // 1. ===, 2. &&, 3. ||
    console.log('All full!');
} else {
    console.log('No');
}

console.log(!0); // true

let johnRepert, alexReport, samReport, mariaReport = 'done'; // mariaReport = done

console.log(johnRepert || alexReport || samReport || mariaReport) // done



console.log('What will the code output to the console?');

console.log( NaN || 2 || undefined ); // 2
console.log( NaN && 2 && undefined ); // NaN
console.log( 1 && 2 && 3 ); // 3
console.log( !1 && 2 || !3 ); // false
console.log( 25 || null && !3 ); // 25
console.log( NaN || null || !3 || undefined || 5); // 5
console.log( NaN || null && !3 && undefined || 5); // 5
console.log( 5 === 5 && 3 > 1 || 5); // true
