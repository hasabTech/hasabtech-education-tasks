// Task 10: Write a function countProperties(obj) that returns number of keys in an object.

// TODO: Create a function called 'countProperties' that takes one parameter (obj)
// TODO: Count and return the number of properties (keys) in the object
// TODO: You can use Object.keys() or iterate through the object

// function countProperties(obj) {
//   // Your code here
// }

// TODO: Export the countProperties function
function countProperties(obj) {
  return Object.keys(obj).length;
}

module.exports = { countProperties };   
