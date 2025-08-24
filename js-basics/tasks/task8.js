// Task 8: Write a function factorial(n) that returns factorial of n.

// TODO: Create a function called 'factorial' that takes one parameter (n)
// TODO: Calculate and return the factorial of n (n! = n × (n-1) × (n-2) × ... × 1)
// TODO: Remember that 0! = 1 and 1! = 1

// function factorial(n) {
//   // Your code here using a loop or recursion
// }

// TODO: Export the factorial function


function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

module.exports = { factorial };