// write a function that returns the number of the supplied position in the fibonacci sequence. The fibonacci sequence is 
// O(2^n) = really bad time complexity. 
function fibonacci(position) {
  if (position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position - 2);
}

console.log(fibonacci(9));


// memoized fibonacci  - O(n) runtime
function fibMemo(index, cache) {
  // index: index of number in fibonacci sequence
  // cache: an array used as memory
  cache = cache || [];
  if (cache[index]) return cache[index];
  else  {
    if (index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }

  return cache[index];
}

console.log(fibMemo(10));