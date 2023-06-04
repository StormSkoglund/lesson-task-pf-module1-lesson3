///Question 1:

var firstNumber = 34;
var secondNumber = 89;

if (firstNumber > secondNumber);
console.log("The first number is smaller than the second");

//Question 2:

var age = 11;
var minimumAge = "13";

if (age >= parseInt(minimumAge)) {
  console.log("Meets requirements");
} else {
  console.log("Does not meet requirements");
}

//Question 3:

var income = "11.050";
var maximumIncome = "13.075";

if (parseFloat(income) >= parseFloat(maximumIncome)) {
  console.log("Income is at maximum");
} else {
  console.log("Income is NOT at maximum");
}

//question 4: I didn't quite understand the question, but I presume that i need to fix the assignment operator and change it with a comparison operator.

var colour = "blue";

if (colour === "orange") {
  console.log("This colour is a bit rubbish");
  //added the following else statement to test for an answer in the console.
} else {
  console.log("color is blue");
}

//Question 5:

var invoicePaid = false;

if (invoicePaid !== true) {
  console.log("Invoice was not paid");
}

//question 6:

var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber));
{
  console.log("You lose again");
}

//question 7

var dayOfTheWeek = 1;
var weekDay;

switch (dayOfTheWeek) {
  case 1:
    weekDay = "Monday";
    break;
  case 2:
    weekDay = "Tuesday";
    break;
  case 3:
    weekDay = "Wednesday";
    break;
  case 4:
    weekDay = "Thursday";
    break;
  case 5:
    weekDay = "Friday";
    break;
  case 6:
    weekDay = "Saturday";
    break;
  case 7:
    weekDay = "Sunday";
    break;
  default:
    weekDay = "Invalid day number";
}

console.log(weekDay);
