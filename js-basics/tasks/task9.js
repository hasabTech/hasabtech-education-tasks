// Task 9: Write a function findMax(arr) that returns the largest number.

// TODO: Create a function called 'findMax' that takes one parameter (arr)
// TODO: Find and return the largest number in the array
// TODO: You can use Math.max() or iterate through the array

// function findMax(arr) {
//   // Your code here
// }

// TODO: Export the findMax function
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

module.exports = { findMax };
