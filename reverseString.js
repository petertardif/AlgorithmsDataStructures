// reverse a string

// using JS built in methods
function reverseStr1a(str) {
	return str
		.split('')
		.reverse()
		.join('');
}

console.log(reverseStr1a('string'));

// using built in methods and Spread Operator
function reverseStr1b(str) {
	return [...str].reverse().join('');
}

console.log(reverseStr1b('string'));

// Using a decrementing for loop
function reverseStr2(str) {
	let reversedStr = '';
	for (i = str.length - 1; i >= 0; i--) {
		reversedStr += str[i];
	}
	return reversedStr;
}

console.log(reverseStr2('hello'));

// using a for of loop
function reverseStr3(str) {
	let reversedStr = '';
	for (let character of str) {
		reversedStr = character + reversedStr;
	}
	return reversedStr;
}

console.log(reverseStr3('wildwildwest'));

// using recursion
function reverseStr4(str) {
	if (str === '') {
		return '';
	} else {
		return reverseStr4(str.substr(1)) + str.charAt(0);
	}
}

console.log(reverseStr4('world'));

// using recursion with ternary
function reverseStr5(str) {
	return str === '' ? '' : reverseStr5(str.substr(1)) + str.charAt(0);
}

console.log(reverseStr5('buffalo'));

// using Reduce method
function reverseStr6(str) {
	return str
		.split('')
		.reduce((reverseStr, character) => character + reverseStr, '');
}

console.log(reverseStr6('LifeIsLikeABoxOfChocolates'));
