// Место для первой задачи
function firstTask() {
    let num = 5;
    while (num < 11) {
        console.log(num);
        num++;
    }
}

// Место для второй задачи
function secondTask() {
    for (let i = 20; i > 13; i--) {
        console.log(i);
    }
}

// Место для третьей задачи
function thirdTask() {
    for (let j = 2; j < 11 ; j++) {
        if (j % 2 === 0) {
            console.log(j);
        }
    }
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2
    while (i <= 16) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
}
    
    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    let p = 0;

    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[p] = i;  // arrayOfNumbers[i - 5] = i;
        p++;
    }
    
    
    // Не трогаем
    return arrayOfNumbers;
}