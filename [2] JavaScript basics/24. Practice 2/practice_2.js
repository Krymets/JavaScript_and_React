/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как
str.length - и получить её длину)

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';
const numberOfFilms = +prompt('How many films have you already watched?', '0');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstAnswer;
let secondAnswer;

// let flag;
// for (let i = 0; i < 2; i++) {
//     flag = false;
//     while (!flag) {
//         firstAnswer = prompt('What is the last movie you watched?', '');
//         secondAnswer = +prompt('How much would you rate it', '0');
//         if (!firstAnswer || !secondAnswer || firstAnswer.length > 50) {
//             flag = false;
//         } else {
//             personalMovieDB.movies[firstAnswer] = secondAnswer;
//             flag = true;
//         }
//     }
// }
for (let i = 0; i < 2; i++) {
    firstAnswer = prompt('What is the last movie you watched?', '');
    secondAnswer = +prompt('How much would you rate it', '0');
    if (!firstAnswer || !secondAnswer || firstAnswer.length > 50) {
        i--;
        console.log('error');
    } else {
        personalMovieDB.movies[firstAnswer] = secondAnswer;
        console.log('done');
    }
}

switch (true) {
    case personalMovieDB.count < 10:
        console.log("Просмотрено довольно мало фильмов");
        break;
    case personalMovieDB.count >= 10 && personalMovieDB.count <= 30:
        console.log("Вы классический зритель");
        break;
    case personalMovieDB.count > 30:
        console.log("Вы киноман");
        break;
    default:
        console.log("Произошла ошибка");
        break;
}

console.log(personalMovieDB);