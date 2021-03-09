const storeItems = document.querySelectorAll(".store-item");
const storeImages = document.querySelectorAll('.store-img');

const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxItem = document.querySelector('.lightbox-item');

const lightboxClose = document.querySelector('.lightbox-close');
const buttonLeft = document.querySelector('.btnLeft');
const buttonRight = document.querySelector('.btnRight');

let currentImageIndex = (function() {
  counter = 0;
  return function() {return counter += 0;};
})();

// Functionality for show modal when item is clicked
storeItems.forEach((storeItem, index) => {
  storeItem.addEventListener("click", function() {
    lightboxItem.style.backgroundImage = `url(${storeImages[index].src})`;
    currentImageIndex = index;
    lightboxContainer.classList.add("show");
  });
});


// Functionality for modal close button
lightboxClose.addEventListener("click", () => {
  lightboxContainer.classList.remove("show");
});

// Functionality for left button of modal
buttonLeft.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = storeImages.length - 1;
  }
  lightboxItem.style.backgroundImage = `url(${storeImages[currentImageIndex].src})`;
});

// Functionality for right button of modal
buttonRight.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex > storeImages.length - 1) {
    currentImageIndex = 0;
  }
  lightboxItem.style.backgroundImage = `url(${storeImages[currentImageIndex].src})`;
})
