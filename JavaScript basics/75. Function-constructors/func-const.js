'use strict';

const num = new Number(3); // [Number: 3]
const num2 = new Function(3); //  [Function: anonymous]

console.log(num, num2);



function User(name, id) { // ES5, class -> ES6
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = () => console.log(`Hello ${this.name}`);
}

const ivan = new User('Ivan', 28); // User { name: 'Ivan', id: 28, human: true }
const alex = new User('Alex', 35); // User {name: 'Alex', id: 35, human: true, hello: [Function (anonymous)]}

ivan.hello(); // Hello Ivan
alex.hello();

console.log(ivan);
console.log(alex);

User.prototype.exit = function () {
	console.log(`User ${this.name} out`); // User Ivan out () => Not working here
};
ivan.exit();
