const btns = document.querySelectorAll('button'),
    btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay');

btn.onclick = function () {
  alert('Click')
};

btn.addEventListener('click', () => {
  alert('Click22');
});


btn.addEventListener('mouseenter', (event) => {
  console.log(event)
  console.log(event.target)
  // event.target.remove();
  console.log('Hover')
});

let i = 0;
const deleteElement = (event) => {
  console.log(event.currentTarget);
  event.target.remove();
  i++;
  if (i == 1) {
    btn.removeEventListener('click', (deleteElement));
  }
};

btn.addEventListener('click', (deleteElement));
overlay.addEventListener('click', (deleteElement));
btns.forEach(bt => {
  bt.addEventListener('click', (deleteElement), {once: true});
});
const link = document.querySelector('a');

link.addEventListener('click', function(event){
  event.preventDefault();
  console.log(event.target);
});