// Task 10: Write a function countProperties(obj) that returns number of keys in an object.

// TODO: Create a function called 'countProperties' that takes one parameter (obj)
// TODO: Count and return the number of properties (keys) in the object
// TODO: You can use Object.keys() or iterate through the object

// function countProperties(obj) {
//   // Your code here
// }

// TODO: Export the countProperties function

function countProperties(obj) {
  var count = 0;
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      count = count + 1;
    }
  }
  return count;
}

module.exports = { countProperties };
