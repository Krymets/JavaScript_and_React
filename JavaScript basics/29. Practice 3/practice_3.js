/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms = +prompt('How many films have you already watched?', '0');

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you already watched?', '0');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstAnswer;
let secondAnswer;

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
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
}

detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}

showMyDb(personalMovieDB.privat);

let userGenre

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        userGenre = prompt(`Your favorite genre at number ${i + 1}?`, '0');
        if (!userGenre || userGenre == null) {
            i--;
            console.log('error');
        } else {
            personalMovieDB.genres[i] = userGenre;
        }
    }
}

writeYourGenres();
