'use strict'

// alert('Hello!');

// const result = confirm('Are you ready?');
// console.log(result)

// const answer = +prompt('How lod are you?', '');
// console.log(typeof(answer));

const answers = [];
console.log(typeof(answers));
console.log(typeof(null)); // оф признанная ошибка

answers[0] = prompt('What is your name?', '');
answers[1] = prompt('What is your surname?', '');
answers[2] = prompt('How old are you?', '');

document.write(answers);