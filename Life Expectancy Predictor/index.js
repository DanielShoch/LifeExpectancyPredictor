// jQuery available

var calculateButton = $("#calculate");

calculateButton.click(lifeExpectancyCalculator);

function lifeExpectancyCalculator() {

  // Storing variables
  var yearsLeft = 76 - document.getElementById("age").value;
  var genderSelected = document.getElementById("gender").value;
  var smokerSelected = document.getElementById("smoker").value;
  var obesitySelected = document.getElementById("obese").value;
  var exerciseSelected = document.getElementById("exercise").value;

  // Smoking effect on life expectancy (yearsLeft variable)
  if (smokerSelected === "yes") {
    yearsLeft = yearsLeft - 10;
  } else if (smokerSelected === "quit") {
    yearsLeft = yearsLeft - 4;
  }

  // Obesity effect on life expectancy (yearsLeft variable)
  if (obesitySelected === "yes") {
    yearsLeft = yearsLeft - 8;
  }

  // Exercise effect on life expectancy (yearsLeft variable)
  if (exerciseSelected === "yes") {
    yearsLeft = yearsLeft + 4;
  } else if (exerciseSelected === "some") {
    yearsLeft = yearsLeft + 2;
  }

  // Gender effect on life expectancy (yearsLeft variable)
  if (genderSelected === "female"){
    yearsLeft = yearsLeft + 5;
  }

  // Conditional change to results text
  if (yearsLeft > 0) {
    $("h2").text("You have " + yearsLeft + " years left");
  } else if (yearsLeft < 0) {
    $("h2").text("You have outlived your life expectancy by " + (yearsLeft * -1) + " years.");
  } else {
    $("h2").text("Uh oh... you have " + (yearsLeft) + " years left.");
  }



  // Making results visible by adding a class to the h2
  $("h2").addClass("visible");

}
