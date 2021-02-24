// Button selectors
const COUNTER_SELECTOR = document.querySelector("#counter");
const BUTTON_SELECTORS = document.querySelectorAll("button");

var counter = 0;

// loops through buttons, assigning event listners that control the counter

BUTTON_SELECTORS.forEach(function(btns){
  btns.addEventListener("click", function() {

    if (btns.classList.contains("prevBtn")) {
      counter--;
      COUNTER_SELECTOR.innerText = counter;
    }
    else if (btns.classList.contains("nextBtn")) {
      counter++;
      COUNTER_SELECTOR.innerText = counter;
    }

    checkNumPositive(counter);
  })
} );

// checks to see if param 'num' is positive or negative

function checkNumPositive(num) {
  if(num < 0)
    COUNTER_SELECTOR.style.color = "red";
  else if (num > 0)
    COUNTER_SELECTOR.style.color = "green";
  else
    COUNTER_SELECTOR.style.color = "#333";
}
