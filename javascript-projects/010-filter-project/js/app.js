// Filter button functionality
(function() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const storeItems = document.querySelectorAll(".store-item");
  const numItems = storeItems.length;
  let i;

  filterBtns.forEach(function(btn) {

    btn.addEventListener("click", function(event) {
      // Stop going to top of page on click
      event.preventDefault();

      // Loops through items and checks dataset item matches dataset
      // filter and adjusts display style accordingly
      for (i = 0; i < numItems; i++) {
        if (btn.dataset.filter === "all") {
          storeItems[i].style.display = "block";
        } else {
          if (btn.dataset.filter === storeItems[i].dataset.item) {
            storeItems[i].style.display = "block";
          } else {
            storeItems[i].style.display = "none";
          }
        }

      }
    });
  })
})();

// Search bar functionality
(function() {
  const searchInput = document.querySelector("#search-item");
  const storeItems = document.querySelectorAll(".store-item");
  const numItems = storeItems.length;
  let inputQuery = "";
  let i;

  // Will filter through products as the user types, no need
  // for post 
  searchInput.addEventListener("keyup", function(event) {
    inputQuery = searchInput.value;
    let inputQueryLength = inputQuery.length;

    // Loops through all store items and slices their item dataset
    // to match length of the search bar input and matches it to
    // the inputQuery
    for (i = 0; i < numItems; i++) {
      if (inputQuery === (storeItems[i].dataset.item).slice(0, inputQueryLength)) {
        storeItems[i].style.display = "block";
      } else {
        storeItems[i].style.display = "none";
      }
    }
  })

})();
