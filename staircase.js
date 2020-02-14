// Consider a staircase of size n = 4
//    #
//   ##
//  ###
// ####

// Observe that its base and height are both equal to n, and the image is drawn using # symbols and spaces. The last line is not preceded by any spaces.  Write a program that prints a staircase of size n.

function staircase(n) {
	let result = '';
	let octo = '#';
	for (let i = 0; i < n; i++) {
		result += octo;
		console.log(result.padStart(n));
	}
}

console.log(staircase(7));
