// Greatest Common Denominator
// Given n numbers, find the greatest common denominator between them.
// For example, given the numbers [42, 56, 14], return 14.

function greatestCommonDenominator(array) {
	// sort the array
	let sortedArray = array.sort();
	// Find the min
	let min = sortedArray[0];
	// check if all numbers are divisible by min, if true return min
	while (min > 1) {
		if (sortedArray.every(arrItem => arrItem % min === 0)) {
			return min;
		}
		// else subtract 1 from the min
		min--;
	}
	// if the min gets down to 2, we breakout and return the min which is now 1 because this will always be the greatest common denominator for whole numbers.
	return min;
}

const numbers = [10, 4, 120];
console.log(greatestCommonDenominator(numbers));
