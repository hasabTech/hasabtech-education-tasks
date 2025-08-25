// Task 6: Write a function isAdult(age) that returns "Adult" if age >= 18 else "Minor".

function isAdult(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}
module.exports = { isAdult };
