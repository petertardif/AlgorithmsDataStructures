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
 *
 * Example 1:
 * Input: "()", Output: true
 *
 * Example 2:
 * Input: "())", Output: False
 *
 * Example 3:
 * Input: "(", Output: False
 *
 * Example 4:
 * Input: "()()()", Output: True
 *
 * Example 5:
 * Input: "(()((())))", Output: True
 *
 * Example 6:
 * Input: ")(", Output: False
 *
 */
// function isValid(str) {
//   // WRITE YOUR CODE HERE!
//   return false;
// }

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
console.log(isMatched("")); // Output: true


// function initButtons() {
//   // const fetchProductButton = document.getElementById('fetch-product-button');
//   const productButton = document.querySelectorAll('.fetch-product-button .update-product-button')
//   const productNameDisplay = document.getElementById('product-name-display');
//   // const updateProductButton = document.getElementById('update-product-button');
//   const productPriceDisplay = document.getElementById('product-price-display');

//   // Fetch Product.
//   productButton.on('click', function (e) {
//     e.preventDefault();
//     const productInput = document.getElementById('product-input-field');
//     const productPriceInput = document.getElementById('product-price-input');
//     const productNameInput = document.getElementById('product-name-input');

//     if (!productInput.value || !productInput.value.length) {
//       alert('You must enter a Product ID');
//     }

//     else if (productInput && productPriceInput && productNameInput) {
//       const response = productAPI('PUT', 'https://example.com/api/', {
//         id: productInput.value,
//         price: productPriceInput.value,
//         name: productNameInput.value
//       });
//       if (reponse.data && response.data.name && response.data.price) {
//         productNameDisplay.value = response.data.name;
//         productPriceDisplay.value = response.data.price;
//       }
//     }

//     else {
//       const response = productAPI('GET', 'https://example.com/api/', { id: productInput.value });
//       if (reponse.data && response.data.name) {
//         productNameDisplay.value = response.data.name;
//       }
//     }
//   });
// }

// Update Product.
// updateProductButton.on('click', function (e) {
// e.preventDefault();
// const productIdInput = document.getElementById('product-input-field');
// const productPriceInput = document.getElementById('product-price-input');
// const productNameInput = document.getElementById('product-name-input');

// if (!productIdInput.value || !productInput.value.length) {
//   alert('You must enter a Product ID');
// } 
// else {
// console.log('made it here');
//     const response = productAPI('PUT', 'https://example.com/api/', {
//       id: productInput.value,
//       price: productPriceInput.value,
//       name: productNameInput.value
//     });
//     if (reponse.data && response.data.name) {
//       productNameDisplay.value = response.data.name;
//       productPriceDisplay.value = response.data.price;
//     }
//     //console.log('made it here');
//   }
// });


// public function getUpdateProduct($request) {
//   if (!isset($request['id']) || !intval($request['id']) > 0) {
//     return $this -> response(['message' => 'Error: you must provide a product ID']);
//   }
//   $safe_id = intval($request['id']);
//   $name = $request['name'];
//   $price = $request['price'];
//   $response = $this -> query(
//     "SELECT * FROM `products` WHERE `id` = {$safe_id} LIMIT 1"
//   );

//   $update = $this -> query(
//     "UPDATE `products`
//           SET`name` = { $name }, `price` = { $price }
//           WHERE`id` = { $safe_id }
//           OR`price` = { $price }
//           OR`name` = { $name }"
//   );

//   if ($update) {
//     $response = $this -> query(
//       "SELECT * FROM `products` WHERE `id` = {$safe_id} LIMIT 1"
//     );
//   }

//   if (!$response) {
//     return $this -> response(['message' => 'Error: product not found']);
//   }
//   return $this -> response($response);
// }

    // public function updateProduct($request)
    // {
        // if (!isset($request['id']) || !intval($request['id']) > 0) {
        //     return $this->response(['message' => 'Error: you must provide a product ID']);
        // }

        // $safe_id = intval($request['id']);
        // $name = $request['name'];
        // $price = $request['price'];

        // $update = $this->query(
        //     "UPDATE `products`
        //     SET `name` = {$name}, `price` = {$price}
        //     WHERE `id` = {$safe_id}
        //     OR `price` = {$price}
        //     OR `name`  = {$name}"
        // );

        // if ($update) {
        //     $response = $this->query(
        //         "SELECT * FROM `products` WHERE `id` = {$safe_id} LIMIT 1"
        //     );
        // }

        // if (!$response) {
        //     return $this->response(['message' => 'Error: product not found']);
        // }

        // return $this->response($response);
    // }