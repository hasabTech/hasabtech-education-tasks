// Task 5: Write a function getGrade(score) that returns "A", "B", "C", "D", "F" based on score.
function getGrade(score){
    if (score >=90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    }   else if (score >= 60 && score < 70) {
        return "D";                                
}else if (score < 60) {     
        return "F";
    } else {
        return "Invalid score";
    }

}

module.exports = { getGrade };
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
