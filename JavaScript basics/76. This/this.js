'use strict';

// 1) this == window, if use strict == undefined
function showThis() {
	console.log(this);
}

showThis();

function showThis2(a, b) {
	console.log(this);
	function sum() {
		console.log(this);
		return a + b;
	}
	console.log(sum());
}

showThis2(4, 5);

// 2) Контекст у методов объекта - сам объект
const obj = {
	a: 20,
	b: 15,
	sum: function () {
		console.log(this);
	}
};

obj.sum(); // { a: 20, b: 15, sum: [Function: sum] }

// 3) this в конструкторах и классах - это новый экземпляр объекта

function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = () => console.log(`Hello ${this.name}`);
}

const ivan = new User('Ivan', 28);

// 4) Ручная привязка this: call, apply, bind
function sayName(surname) {
	console.log(this); // { name: 'John' }
	console.log(this.name + surname); // John
}

const user = {
	name: 'John'
};

sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
	return this * num;
}

const double = count.bind(2);
console.log(double(3)); // 6
console.log(double(13)); // 26

// const btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
// 	console.log(this);
// });


const obj2 = {
	num: 5,
	sayNumber: function() {
		const say = () => console.log(this);
		say();
	}
};

obj2.sayNumber(); // { num: 5, sayNumber: [Function: sayNumber] }


const double2 = a => a * 2;
console.log(double2(4)); // 8