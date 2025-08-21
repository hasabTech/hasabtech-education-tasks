// Task 7: Write a function sumArray(arr) that returns the sum of all numbers in an array.

// TODO: Create a function called 'sumArray' that takes one parameter (arr)
// TODO: Use a loop to iterate through the array and sum all numbers
// TODO: Return the total sum

function sumArray(arr) {
    let sum=0;
    for(let i=0; i< arr.length; i++) {
        sum+=arr[i];
    }
    return sum;
 }

// TODO: Export the sumArray function

module.exports={sumArray};