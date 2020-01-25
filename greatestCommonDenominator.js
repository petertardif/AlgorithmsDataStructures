// Greatest Common Denominator
// Given n numbers, find the greatest common denominator between them.
// For example, given the numbers [42, 56, 14], return 14.

function greatestCommonDenominator(array) {
  if ( min === 1) {
    return 1; 
  }
  // sort the array
  let sortedArray = array.sort();
  // Find the min
  let min = sortedArray[0];

  // check if all numbers are divisible by min, if true return min
  if (sortedArray.every(arrItem => arrItem % min === 0)) {
    return min;
  } 
  // else subtract 1 from the min
  else {
    min - 1

  }
  // check if new min is visible by array, if true return, else repeat
}