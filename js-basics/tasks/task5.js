// Task 5: Write a function getGrade(score) that returns "A", "B", "C", "D", "F" based on score.

// TODO: Create a function called 'getGrade' that takes one parameter (score)
// TODO: Return grades based on the following scale:
// 90-100: "A"
// 80-89: "B" 
// 70-79: "C"
// 60-69: "D"
// Below 60: "F"

// function getGrade(score) {
//   // Your code here using if-else statements
// }

// TODO: Export the getGrade function

//

//  function getGrade(score) {
//   if (score >= 90 && score <=100) { 
//     return "A";
//   }
//  else if(score >= 80 && score <=89) { 
//   return "B";

//  }
//  else if (score >=70 && score <=79) {
//    return "C:";

//  }
//  else if (Score >=60 && score <=69) { 
//   return "D";
//  }
//  else (score < 60) { 
//   return "F";
// }
// };

// module.exports = { getGrade }

function getGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

module.exports = { getGrade }