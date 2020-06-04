/**
 * 
 * We are looking for how you think through coming to a solution
 * and how you communicate, given a problem to solve and
 * requirements for it. We are not looking for a specific
 * solution or if it has correct syntax.
 * 
 * Pseudo code is ok, and it’s ok using plain words to explain.
 * If you were writing production code, we would expect code to
 * have correct syntax. Feel free to ask questions to help you
 * to understand the problem better.
 *
 * If you write code, there are some tests to validate your code
 * works with a couple of test cases. Press the "Play" button 
 * to run through the tests.
 *
 *
 * Given a string containing just the characters '(' and ')',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * 1. Open parentheses must be closed in the correct order.
 *
 * Note that an empty string is also considered valid.
**/

function isValid(str) {
  // collect the parentheses
  let stack = [];
  // object to compare parentheses
  let matchingPairs = {
    "(": ")",
  }
  // iterate through the string 
  for (var i = 0; i < str.length; i++) {
    // check if it is an opening parenthesis and if it is push it into the stack
    if (str[i] === "(") {
      stack.push(str[i]);
    }
    // else, it should be a closing parentheses and check it against the last in opening parentheses
    else {
      let lastInStack = stack.pop();
      if (str[i] !== matchingPairs[lastInStack]) {
        return false;
      }
    }
  }
  // check if there are any opening parentheses in the stack
  if (stack.length !== 0) {
    return false;
  }

  return true;
}

console.log(isValid("()")); // Output: true
console.log(isValid("())")); // Output: False
console.log(isValid("(")); // Output: False
console.log(isValid("()()()")); // Output: True
console.log(isValid("(()((())))")); // Output: True
console.log(isValid(")(")); // Output: False
console.log(isValid("")); // Output: true
console.log("***********************")

// assuming we are only using parentheses
function isMatched(str) {
  if (str.split('')[0] === ')') return false;
  return str.split('').reduce((acc, curVal) => {
    // check if the value is a opening parentheses and if so, add to my acc
    if (acc < 0) { return false }
    else if (curVal === "(") {
      return acc += 1;
    }
    // check if the value is a closing parentheses and if so, decrement the accumulator
    else if (curVal === ")") {
      return acc -= 1
    }
    // return the accumulator
    return acc;
  }, 0) === 0// if it matches 0 then it returns true and is balanced, if it doesn't match, it is unbalanced and returns false
}

console.log(isMatched("()")); // Output: true
console.log(isMatched("())(")); // Output: False
console.log(isMatched("())")); // Output: False
console.log(isMatched("(")); // Output: False
console.log(isMatched("()()()")); // Output: True
console.log(isMatched("(()((())))")); // Output: True
console.log(isMatched(")(")); // Output: False
console.log(isMatched("")) // Output: true
