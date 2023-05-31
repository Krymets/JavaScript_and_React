const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    let newStr = '';
    for (let i = 1; i <= str.length; i++) {
        newStr += str.substr(-i, 1)
    }
    return newStr
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let returnData = 'Доступные валюты:\n';
    if (arr.length === 0) {
        return 'Нет доступных валют'
    }
    for (let i of arr) {
        if (i !== missingCurr) {
            returnData += `${i}\n`
        }
    }
    return returnData
}