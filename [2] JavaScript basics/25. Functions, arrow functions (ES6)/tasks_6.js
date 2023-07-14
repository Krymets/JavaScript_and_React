// Место для первой задачи
function sayHello(userName) {
    return `Привет, ${userName}`;
}

// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

// Место для третьей задачи
function getMathResult(firstNum, secondNum) {
    let newString = firstNum;
    let thirdNum = firstNum
    for (let i = 1; i < secondNum; i++) {
        thirdNum += firstNum
        newString += '---' + thirdNum;
    }
    return newString;
}