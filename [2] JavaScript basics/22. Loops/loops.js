'use strict';

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

num = 50;

do {
    console.log(num);
    num++;
}
while (num <= 55);

num = 50;

for (let i = 1; i < 7; i++) {
    // console.log(i);
    if (i === 4) {
        //break;
        continue;
    }
    console.log('ddd', num);
    num++;
}

for (let i = 0; i < 3; i++) {
    // console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(i, j);
    }
}

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 7;

for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
            for (let k = 0; k < 3; k++) {
                if (k === 2) continue first; // break first; - обрыв цикла
                console.log(`Third level: ${k}`);
        }
    }
}