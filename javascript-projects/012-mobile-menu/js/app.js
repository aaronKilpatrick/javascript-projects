(function() {
  const menuBtn = document.querySelector(".menu-icon");
  const navMenu = document.querySelector(".nav-menu");
  let counter = 0;
  menuBtn.addEventListener("click", function() {
    counter++;
    if(counter % 2 === 0) {
      navMenu.style.display = "none";
      navMenu.style.opacity = "0";
    } else {
      navMenu.style.display = "flex";
      navMenu.style.opacity = "100";
    }
  })
})();