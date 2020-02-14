// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers. For example, arr = [1,3,5,7,9] . Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24. We would print: 16 24.

// Complete the miniMaxSum function so that it prints two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.

function miniMaxSum1(arr) {
	arr.sort((a, b) => a - b);
	let min = 0;
	let max = 0;
	let length = arr.length;
	for (let i = 0; i < length; i++) {
		i < 1
			? (min += arr[i])
			: i >= length - 1
			? (max += arr[i])
			: (min += arr[i]) && (max += arr[i]);
	}
	return `${min} ${max}`;
}

let array1 = [1, 2, 3, 4, 6];
let array2 = [5, 3, 2, 4, 1];

console.log(miniMaxSum1(array1));
console.log(miniMaxSum1(array2));

function miniMaxSum2(arr) {
	arr.sort((a, b) => a - b);
	let length = arr.length;

	let min = arr
		.filter((val, index) => index < length - 1)
		.reduce((acc, curVal) => acc + curVal);

	let max = arr
		.filter((val, index) => index > 0)
		.reduce((acc, curVal) => acc + curVal);

	return `${min} ${max}`;
}

console.log(miniMaxSum2(array1));
console.log(miniMaxSum2(array2));
