// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are. For example, there are n=7 socks with colors arr=[1,2,1,2,1,3,2]. There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is 2.

function sockMerchant(n, arr) {
	let leftOverSocks = [];
	let pairedSocks = 0;
	for (let i = 0; i < n; i++) {
		if (leftOverSocks.includes(arr[i])) {
			pairedSocks += 1;
			let index = leftOverSocks.indexOf(arr[i]);
			leftOverSocks.splice(index, index + 1);
		} else {
			leftOverSocks.push(arr[i]);
		}
	}
	return pairedSocks;
}

let array1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let array2 = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

console.log(sockMerchant(9, array1));
console.log(sockMerchant(10, array2));
