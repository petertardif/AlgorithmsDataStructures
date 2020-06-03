// Create a basic sentence checker that takes in a string of characters and determines whether they form valid sentences. If a sentence is valid, the program should print it out.
// We can consider a sentence valid if it conforms to the following rules:

// The sentence must start with a capital letter, followed by a lowercase letter or a space.

// All other characters must be lowercase letters, separators (,,;,:) or terminal marks (.,?,!,‽).

// There must be a single space between each word.

// The sentence must end with a terminal mark immediately following a word.

function validSentence(str) {
	let capitalFirstLetter = str[0] === str[0].toUpperCase();
	let lowerCaseSecondLetter = str[1] === str[1].toLowerCase();
	let spaceForSecondIndex = str[1] === ' ';

	if (!(capitalFirstLetter && (lowerCaseSecondLetter || spaceForSecondIndex)))
		return 'Sentence does not begin with uppercase letter, second letter is uppercase or not a space';

	for (let i = 1; i < str.length; i++) {
		let doubleSpaces = str[i] + str[i + 1] === '  ';
		let invalidChars = /[a-z\?\!\:\;\,\‽\ ]/g.test(str[i]);
		let endingSpace =
			str[str.length - 2] === ' ' || !/[a-zA-Z]/g.test(str[str.length - 2]);
		let endingChar = /[\?\!\‽\.]/.test(str[str.length - 1]);
		if (!invalidChars || doubleSpaces || endingSpace || !endingChar)
			return 'Sentence contains invalid characters, double spaces, or ends with invalid punctuation';
	}
	return str;
}

console.log(validSentence('Aaap!'));
console.log(validSentence('A aap!'));
console.log(validSentence('aap!'));
console.log(validSentence('A‽?!,:;aap!'));
console.log(validSentence('Aaap!  aarp?'));
console.log(validSentence('Aaap!!'));
