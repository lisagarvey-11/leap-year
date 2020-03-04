// User-Interface: jQuery user interface logic to retrieve input from the form, and call our business logic's leapYear() function (which we will write momentarily). It will also be responsible for displaying results our business logic returns. In the code above we attach a submit listener to our form. When the form is submitted, we assign the value from our form input to the variable, year.Then, we call a leapYear() function (which we will write momentarily), pass it the year variable as an argument, and assign the return value (which will be true or false) to the variable result. Even though we haven't written the leapYear() function yet, we already know from our specs that it must take a number and return true or false. This is yet another benefit to identifying and listing out anticipated behaviors before we begin coding. Continuing with the code above, we also display the returned boolean value (currently assigned to the variable result) on the web page with the line $("#result").text(result);

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});

//Business Logic: To start coding our business logic using the behavior-driven development process, we'll take our plain English specifications (also known as "specs" or "behavior examples") and implement code that does each of these behaviors. We always want to begin with the simplest possible example that requires the least amount of code to implement, and focus on only one behavior at a time. Hint: Often if we have a number of conditions that will be evaluated, the first behavior is what will ultimately be the else statement when none of the conditions are true. In our leap year application, the first behavior is returning false for a year that is NOT a leap year, which means it is not divisible by 4, 100 or 400.

var leapYear = function(year) {
  return false;
};