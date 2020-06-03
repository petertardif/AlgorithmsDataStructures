// Factory Functions
function createPerson(first_name, last_name, age) {
	return {
		first_name,
		last_name,
		age,
		defineNickname(name) {
			console.log(name);
		}
	};
}

const person1 = createPerson('Steve', 'Hanson', 20);
console.log(person1);
console.log(person1.defineNickname('foil'));
