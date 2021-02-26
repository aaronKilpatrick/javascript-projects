(function() {

  const custImage = document.querySelector("#customer-img");
  const custName = document.querySelector("#customer-name");
  const custReview = document.querySelector("#customer-text");
  const buttons = document.querySelectorAll(".btn");
  let customerArr = [];
  let counter = 0;


  // Customer constructor function coupled with createCustomers()
  // to create customer objects
  function customers(img, name, review) {

    this.img = img;
    this.name = name;
    this.review = review;
  }

  // creates new customer objects and pushes to array
  function createCustomers(img, name, review) {
    let image = `./img/customer-${img}.jpg`;
    let customer = new customers(image, name, review);

    customerArr.push(customer);
  }

  // calling createCustomers to create new objects
  createCustomers(0, "Aaron Kilpatrick", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.");
  createCustomers(1, "Maddie Gornia", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")
  createCustomers(2, "Craig Joseph", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  createCustomers(3, "Liam Mark", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.")
  createCustomers(4, "Leanne Tonia", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");

  // add event listeners on buttons for DOM manipulation
  buttons.forEach(function(button) {
    let arrayLength = customerArr.length - 1;

    button.addEventListener("click", function() {
      // Checks if counter has gone below the bounds of array
      if (button.classList.contains("prevBtn")) {
        counter--;
        if (counter < 0) {
          counter = arrayLength;
          console.log(counter);
        }
      }

      // Checks if counter has exceeded bounds of array
      if (button.classList.contains("nextBtn")) {
        counter++;
        console.log(counter);
        if (counter >= arrayLength) {
          counter = 0;
        }
      }

      //change data on DOM
      custImage.src = customerArr[counter].img;
      custName.innerText = customerArr[counter].name;
      custReview.innerText = customerArr[counter].review;
    })
  })
})();