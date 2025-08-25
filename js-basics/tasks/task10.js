// Task 10: Write a function countProperties(obj) that returns number of keys in an object.

function countProperties(obj) {
  return Object.keys(obj).length;
}
module.exports = { countProperties };