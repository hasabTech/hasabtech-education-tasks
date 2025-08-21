// Task 11: Write a function getDayName(dayNumber) that returns "Monday", "Tuesday", etc.

// TODO: Create a function called 'getDayName' that takes one parameter (dayNumber)
// TODO: Use a switch statement to return the day name based on the number (1-7)
// TODO: 1 = "Monday", 2 = "Tuesday", ..., 7 = "Sunday"
// TODO: Return "Invalid day" for numbers outside 1-7

function getDayName(dayNumber) {
  if (dayNumber === 1){
    return "Monday"
  }
  if (dayNumber === 2){
    return "Tuesday"
  }
  else if (dayNumber === 3){
    return "Wednesday"
  }
  else if (dayNumber === 4){
    return "Thursday"
  }
  else if (dayNumber === 5){
    return "Friday"
  }
  else if (dayNumber === 6){
    return "Saturday"
  }
  else if (dayNumber === 7){
    return "Sunday"
  }
  else {
    return "Invalid day"
  }
}

// TODO: Export the getDayName function

module.exports = {getDayName}