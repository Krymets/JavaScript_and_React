'use strict';

function first() {
    // Do something
    setTimeout(function (){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`I learn ${lang}`);
    callback();
}
function done() {
    console.log('Done');
}

learnJS('JavaScript', done); // function without ()

learnJS('JavaScript', function (){ // Anonymous function
    console.log('Done');
});