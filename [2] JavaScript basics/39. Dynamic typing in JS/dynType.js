'use strict';
// To String
// 1)
console.log(typeof(String(null))); // string
console.log(String(null)); // 'null'
console.log(String(4)); // '4'

// 2)
console.log(typeof(5 + '')); // string

const num = 5;

console.log('https://s.ua/catalog/' + num); // https://s.ua/catalog/5

const fontSize = 26 + 'px';

// To Number
// 1)
console.log(Number('4')); // 4
// 2)
console.log(+'4'); // 4
console.log(+'fghfh'); // NaN
// 3)
console.log(typeof(parseInt('15px', 10))); // number
console.log(parseInt('15px', 10)); // 15

//let answer = +prompt('Hello', '');

// To Boolean
// 1)
// 0, '', null, undefined, NaN ---> false ELSE true
let switcher = null;

if(switcher) {
    console.log('Working...') //
}

switcher = 1

if(switcher) {
    console.log('Working...')  // Working...

}
// 2)
console.log(Boolean('4')); // true

//3)
console.log(typeof (!!'4')); // boolean

console.log(!!'4'); // true