// Task 6: Write a function isAdult(age) that returns "Adult" if age >= 18 else "Minor".

// TODO: Create a function called 'isAdult' that takes one parameter (age)
// TODO: Return "Adult" if age is 18 or greater, otherwise return "Minor"

// function isAdult(age) {
//   // Your code here
// }

// TODO: Export the isAdult function
let age = 20;
function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}

module.exports = { isAdult };