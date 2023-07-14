//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i <= lines; i++) {
    for (let k = lines; k > i; k--) {
        result += ' ';

    }
    for (let j = 0; j < i + 1; j++) {
        result += '*';
    }
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}

console.log(result)