function getTimeFromMinutes(num) {
    let hour
    if (Math.floor(num / 60 === 1)) {
        hour = 'час';
    } else if (Math.floor(num / 60 > 1) || Math.floor(num / 60 < 5)) {
        hour = 'часа';
    } else {
        hour = 'часов';
    }
    switch (true) {
        case isNaN(num) || !Number.isInteger(num) || num < 0:
            return "Ошибка, проверьте данные";
        case num < 60:
            return `Это 0 часов и ${num} минут`;
        case num % 60 === 0:
            return `Это ${Math.floor(num / 60)} ${hour} и 0 минут`;
        default:
            return `Это ${Math.floor(num / 60)} ${hour} и ${num - (Math.floor(num / 60)) * 60} минут`;
    }
}

console.log(getTimeFromMinutes(233));

function findMaxNumber(a, b ,c, d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

console.log(findMaxNumber(1, 5, 6.6, 11));