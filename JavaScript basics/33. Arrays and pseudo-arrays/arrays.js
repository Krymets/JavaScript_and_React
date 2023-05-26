'use strict';

const arr = [1, 2, 3, 6, 8];

arr.pop();

console.log(arr) // [ 1, 2, 3, 6 ]

arr.push(10);

console.log(arr) // [ 1, 2, 3, 6, 10 ]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr) {
    console.log(value);
}

arr[99] = 0;
console.log(arr.length); // 100
console.log(arr); // [ 1, 2, 3, 6, 10, <94 empty items>, 0 ]

arr.forEach(function(item,i, arr) {
    console.log(`${i}: ${item} in massive ${arr}`);
});

const str = 'qqq, fdfg, fgdfh, fhh, dgsdg';
const products = str.split(', ');
console.log(products); // [ 'qqq', 'fdfg', 'fgdfh', 'fhh', 'dgsdg' ]
console.log(products.sort()); // [ 'dgsdg', 'fdfg', 'fgdfh', 'fhh', 'qqq' ]

const strin = products.join('; ');
console.log(strin); // qqq; fdfg; fgdfh; fhh; dgsdg

console.log(arr.sort()); // [ 0, 1, 10, 2, 3, 6, <94 empty items> ]

function compareNum(a, b) {
    return a - b;
}

console.log(arr.sort(compareNum)); // [ 0, 1, 2, 3, 6, 10, <94 empty items> ]


