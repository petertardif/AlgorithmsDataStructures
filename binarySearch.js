// Binary Search 
// - Search for a given value (key) inside of a list (numArray)
// - Runs in O (log n) run time which is ver performant.

const binarySearch = (numArray, key) => {
  // given array must be sorted. If not, it will not work.
  // find the middle index
  let middleIndex = Math.floor(numArray.length / 2);
  // find the middle element of the numArray
  let middleElement = numArray[middleIndex];

  if (middleElement === key) return true;
  else if (middleElement < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  }
  else if (middleElement > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex),key);
  }
  else return false;
};

console.log(binarySearch([5, 7,12,16,36,39,42,56,71], 56));