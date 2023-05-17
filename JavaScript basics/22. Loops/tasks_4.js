// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }
    
    
    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {
            data[i] += " - done";
        }
    }
    
    
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 0; i < data.length; i++) {
        result[i] = data[(data.length - 1) - i];
    }
    
    
    // Не трогаем
    return result;
}