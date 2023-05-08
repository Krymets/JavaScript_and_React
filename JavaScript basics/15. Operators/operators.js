'use strict';

console.log(4 + 'blablabla');
console.log(4 + +'5'); // унарный плюс

let incr = 10,
    decr = 10;

// постфиксный
incr++;
decr--;
console.log(incr, decr);
// префиксный
++incr;
--decr;
console.log(incr, decr);

console.log(incr++, decr--); // сначала выводит старое значение
console.log(++incr, --decr); // меняет а потом выводит

console.log(5%2); // 1

console.log(2*4 == 8); // true
console.log(2*4 == '8'); // true
console.log(2*4 === 8); // true
console.log(2*4 === '8'); // false

// && and
// || or

const isChecked = true,
    isClose = true;

console.log(isChecked && isClose); // true
console.log(isChecked || isClose); // true
console.log(!isChecked || !isClose); // false