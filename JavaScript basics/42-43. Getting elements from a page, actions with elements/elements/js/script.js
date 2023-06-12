'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button'); // all buttons
// const btns = document.getElementsByTagName('button')[1];
console.log(btns);
// console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles)

const  hearts = document.querySelectorAll('.heart');


console.log(hearts);

hearts.forEach(item => {
    console.log(item);
})

const oneHeart = document.querySelector('.heart');
console.log(oneHeart); //first elem

console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
   item.style.backgroundColor = 'blue';
});


const div = document.createElement('div');
// const text = document.createTextNode('Here I am');

div.classList.add('black');
document.body.append(div);

// document.body.appendChild(div);  old code

div.classList.add('heart');
document.querySelector('.wrapper').append(div);

const wrapper = document.querySelector('.wrapper');
// wrapper.append(div);
wrapper.prepend(div);

hearts[0].before(div);
// hearts[0].insertBefore(div, hearts[1]); old code
hearts[0].after(div);

hearts[0].remove();
// wrapper.removeChild(hearts[1]); old code


hearts[1].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); old code


div.innerHTML = '<h1>Hello World</h1>';

// div.textContent = 'Hello'; // only text

div.insertAdjacentHTML('beforebegin', '<H2>Hello</H2>')
div.insertAdjacentHTML('afterbegin', '<H2>Hello</H2>')
div.insertAdjacentHTML('beforeend', '<H2>Hello</H2>')
div.insertAdjacentHTML('afterend', '<H2>Hello</H2>')

const  hearts2 = wrapper.querySelectorAll('.heart');