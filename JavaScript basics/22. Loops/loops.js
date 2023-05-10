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