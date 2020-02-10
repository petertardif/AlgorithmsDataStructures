// quick solution with built in methods
function isPalindrome(str) {
	let cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
	return (
		cleanStr
			.split('')
			.reverse()
			.join('') === cleanStr
	);
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('bear'));

// with a for loop
function isPalindrome2(str) {
	str = str.toLowerCase();
	let len = str.length;
	// only need to iterate through the half of the string since we are comparing the beginning character to the end character with each iteration
	for (let i = 0; i < len / 2; i++) {
		// simultaneously checking the first character and the last index, as long as they match the loop continues
		if (str[i] !== str[len - 1 - i]) {
			return false;
		}
	}
	return true;
}

console.log(isPalindrome2('racecar'));
console.log(isPalindrome2('yes sir'));

// using .every()
function isPalindrome3(str) {
	let charArray = str.toLowerCase().split('');
	let len = charArray.length;
	let result = charArray.every((letter, index) => {
		return letter === charArray[len - 1 - index];
	});
	return result;
}

console.log(isPalindrome3('yes sir'));
console.log(isPalindrome3('racecar'));

// using for of loop
const isPalindrome4 = str => {
	// strips non-alphanumeric characters and converts to lowercase
	let cleanStr = cleanStr.toLowerCase().replace(/[\W_]/g, '');
	const charArray = cleanStr.split('');

	for (let index of charArray) {
		if (index !== charArray.pop()) {
			return false;
		}
	}
	return true;
};

console.log(isPalindrome4('racecar'));
console.log(isPalindrome4('yes sir'));
