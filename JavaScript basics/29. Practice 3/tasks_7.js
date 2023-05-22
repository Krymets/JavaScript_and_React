// Место для первой задачи
function calculateVolumeAndArea(num) {
    if (isNaN(num) || !Number.isInteger(num) || num < 0) {
        return "При вычислении произошла ошибка";
    } else {
        return `Объем куба: ${Math.pow(num, 3)}, площадь всей поверхности: ${6 * Math.pow(num, 2)}`;
    }
}

console.log(calculateVolumeAndArea(-15));

// Место для второй задачи
function getCoupeNumber(num) {
    switch (true) {
        case isNaN(num) || !Number.isInteger(num) || num < 0:
            return "Ошибка. Проверьте правильность введенного номера места";
        case num < 1 || num > 36:
            return "Таких мест в вагоне не существует";
        default:
            return Math.ceil(num / 4);
    }
}

console.log(getCoupeNumber(33));
