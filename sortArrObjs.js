//Create a function that takes in an array of objects (ID, x (top left) ,y, height, width).  Think of them as boxes or buttons on a webpage. Return the object IDs in order (Top to bottom first and then left to right).

function orderTopToBottomOnScreen(arrObjs) {
	// test to see if the array exists or is empty
	if (!arrObjs || arrObjs.length === 0) {
		return `Array does not exist or is empty`;
	}
	// create an empty array to store the object IDs to return
	const sortedIds = [];
	// sort the array of objects in place by each object's y coordinate by comparing the first value to the next and moving through the whole array of objects based on the key we select. This ensures we move from top to bottom on a webpage as the y coordinate starts from the top of the screen at 0 and increases as you move down a page.
	arrObjs.sort((a, b) => a.y - b.y);
	// map over the array, find each object's id, and push it into the array of sortedIDs
	arrObjs.map(obj => sortedIds.push(obj.id));
	// return the array of IDs sorted from top to bottom
	return sortedIds;
}

function orderLeftToRightOnScreen(arrObjs) {
	// test to see if the array exists or is empty
	if (!arrObjs || arrObjs.length === 0) {
		return `Array does not exist or is empty`;
	}
	// create an empty array to store the object IDs to return
	const sortedIds = [];
	// sort the array of objects in place by each object's x coordinate by comparing the first value to the next and moving through the whole array of objects based on the key we select. This ensures we move from left to right on a webpage as the x coordinate starts from the left of the screen at 0 and increases as you move across a page to the right.
	arrObjs.sort((a, b) => a.x - b.x);
	// map over the array, find each object's id, and push it into the array of sortedIDs
	arrObjs.map(obj => sortedIds.push(obj.id));
	// return the array of IDs sorted from top to bottom
	return sortedIds;
}

// Test array of objects
const testArrObjs = [
	{
		id: 1,
		x: 6,
		y: 4,
		height: 5,
		width: 5
	},
	{
		id: 2,
		x: 5,
		y: 1,
		height: 5,
		width: 5
	},
	{
		id: 3,
		x: 9,
		y: 10,
		height: 5,
		width: 5
	},
	{
		id: 4,
		x: 3,
		y: 2,
		height: 5,
		width: 5
	}
];

// tests to determine whether if statement verifies that array of objects is not false/undefined or empty
const testArrayUndefined = undefined;
const testArrayEmpty = [];

console.log(orderTopToBottomOnScreen(testArrayUndefined));
console.log(orderTopToBottomOnScreen(testArrayEmpty));
console.log(orderTopToBottomOnScreen(testArrObjs));
console.log(orderLeftToRightOnScreen(testArrObjs));
