// Task 4: Write a function isEven(num) that returns true if number is even.

// TODO: Create a function called 'isEven' that takes one parameter (num)
// TODO: Return true if the number is even, false if odd
// Hint: Use the modulo operator (%) to check if a number is divisible by 2

// function isEven(num) {
//   // Your code here
// }

// TODO: Export the isEven function

function isEven(num) {
  return num % 2 === 0;
}
module.exports = { isEven };
