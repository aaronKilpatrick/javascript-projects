// Button selectors
const counterDisplay = document.querySelector("#counter");
const buttons = document.querySelectorAll("button");

var counter = 0;

// loops through buttons, assigning event listners that control the counter

buttons.forEach(function(btns){
  btns.addEventListener("click", function() {

    if (btns.classList.contains("prevBtn")) {
      counter--;
      counterDisplay.innerText = counter;
    }
    else if (btns.classList.contains("nextBtn")) {
      counter++;
      counterDisplay.innerText = counter;
    }

    checkNumPositive(counter);
  })
} );

// checks to see if param 'num' is positive or negative

function checkNumPositive(num) {
  if(num < 0)
    counterDisplay.style.color = "red";
  else if (num > 0)
    counterDisplay.style.color = "green";
  else
    counterDisplay.style.color = "#333";
}
