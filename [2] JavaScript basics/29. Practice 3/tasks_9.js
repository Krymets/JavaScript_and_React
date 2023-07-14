'use strict';
function fib(num) {
    if (!Number.isInteger(num)){
        return ''
    } else {
        let fibo = '';
        let lastNum = 0;
        let lastestNum = 0;
        let someVariable = 0;
        for (let i = 0; i < num; i++) {
            if (fibo.length > 0){
                fibo += ' ';
            }
            if (fibo.length < 3) {
                fibo += `${i}`;
                lastNum = i
            } else {
                fibo += `${lastestNum + lastNum}`;
                someVariable = lastestNum;
                lastestNum = lastNum;
                lastNum = someVariable + lastNum;
            }
        }
        return fibo
    }
}


console.log(fib(7.5))