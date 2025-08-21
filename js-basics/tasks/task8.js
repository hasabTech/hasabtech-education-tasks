// Task 8: Write a function factorial(n) that returns factorial of n.

// TODO: Create a function called 'factorial' that takes one parameter (n)
// TODO: Calculate and return the factorial of n (n! = n × (n-1) × (n-2) × ... × 1)
// TODO: Remember that 0! = 1 and 1! = 1

function factorial(n) {
    let result = 1;              // start with 1 (because multiplying by 0 would always give 0)

    for (let i = 2; i <= n; i++) { // loop from 2 up to n
      result *= i;                 // multiply result by the current i
    }
  
    return result;          
}

// TODO: Export the factorial function
module.exports = {factorial}