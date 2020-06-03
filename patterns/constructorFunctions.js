// Constructor functions
function CreatePerson(first_name, last_name, age) {
	this.first_name = first_name;
	this.last_name = last_name;
	this.age = age;
	this.defineNickname = function(name) {
		console.log(name);
	};
}

const person1 = new CreatePerson('Steve', 'Hanson', 20);
console.log(person1);
