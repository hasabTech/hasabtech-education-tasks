// Task 7: Write a function sumArray(arr) that returns the sum of all numbers in an array.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
module.exports = { sumArray };