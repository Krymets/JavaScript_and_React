/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


let firstAnswer;
let secondAnswer;
let userGenre;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDb: function showMyDb(hidden) {
        if (!hidden) {
            console.log(personalMovieDB)
        }
    },
    start: function () {
        personalMovieDB.count = +prompt('How many films have you already watched?', '0');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films have you already watched?', '0');
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
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
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            userGenre = prompt(`Your favorite genre at number ${i + 1}?`, '0');
            if (!userGenre || userGenre == null) {
                i--;
                console.log('error');
            } else {
                personalMovieDB.genres[i] = userGenre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favorite genre at number ${i + 1} - ${item}`)
        });
    }
};

// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.showMyDb(personalMovieDB.privat);
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.writeYourGenres();
