# Sample Solutions

This directory contains sample solutions for reference. **Do not copy these directly** - use them only to understand the approach if you're stuck.

## Task 3 Sample Solution

```javascript
// Task 3: Write a function add(a, b) that returns the sum of a and b.

function add(a, b) {
  return a + b;
}

module.exports = { add };
```

## Task 7 Sample Solution

```javascript
// Task 7: Write a function sumArray(arr) that returns the sum of all numbers in an array.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Alternative solution using reduce:
// function sumArray(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }

module.exports = { sumArray };
```

## Task 11 Sample Solution

```javascript
// Task 11: Write a function getDayName(dayNumber) that returns day names.

function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Invalid day";
  }
}

module.exports = { getDayName };
```
