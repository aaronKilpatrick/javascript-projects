(function() {
  const images = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4",
  ];

  const buttons = document.querySelectorAll(".btn");
  const imageCntr = document.querySelector(".img-container");
  let arrayLength = images.length - 1;
  let counter = 0;

  // assigns both buttons with eventlisteners. Changes backgroundimage according
  // to counter. Checks if counter is at end of array and adjusts.
  buttons.forEach(function(button) {
    button.addEventListener("click", function() {

      // Checking for left button
      if (button.classList.contains("btn-left")) {
        counter--;
        if (counter < 0) {
          counter = arrayLength;
        }
        imageCntr.style.backgroundImage = `url("./img/${images[counter]}.jpeg")`;
      }

      // Checking for right button
      if (button.classList.contains("btn-right")) {
        counter++;
        if (counter > arrayLength) {
          counter = 0;
        }
        imageCntr.style.backgroundImage = `url("./img/${images[counter]}.jpeg")`;
      }
    });
  });
})();
