// Bubble Sort - sort an array without using the sort() higher order function

// Method 1
const numbers = [7, 1, 100, 35, 49, 23, 12, 9];
console.log(numbers);

function bubbleSort1(array) {
	let isSorted = false;
	while (!isSorted) {
		isSorted = true;
		let lastUnsorted = array.length - 1;
		for (i = 0; i < lastUnsorted; i++) {
			if (array[i] > array[i + 1]) {
				let temp = array[i];
				array[i] = array[i + 1];
				array[i + 1] = temp;
				isSorted = false;
			}
		}
		lastUnsorted--;
	}
}
bubbleSort1(numbers);
console.log(numbers);

// ********************************************

// Method 2

const arrNumbers = [33, 103, 3, 726, 200, 984, 198, 764, 9];
console.log(arrNumbers);

function bubbleSort(items) {
	var length = items.length;
	//Number of passes
	for (var i = 0; i < length; i++) {
		//The code j < (length - i) reduces the number of passes
		for (var j = 0; j < length - i - 1; j++) {
			//Compare the adjacent positions
			if (items[j] > items[j + 1]) {
				//Swap the numbers
				var tmp = items[j]; //Temporary variable to hold the current number
				items[j] = items[j + 1]; //Replace current number with adjacent number
				items[j + 1] = tmp; //Replace adjacent number with current number
			}
		}
	}
}

bubbleSort(arrNumbers);
console.log(arrNumbers);
