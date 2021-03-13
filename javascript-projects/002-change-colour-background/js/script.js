
// Colour array
var colours = ["#A93226", "#B03A2E", "#76448A", "#2471A3", "#17A589", "#F1C40F", "#2E4053", "#E67E22"];
var buttonSelector = document.querySelector("button");

buttonSelector.addEventListener("click", function() {
  var randomColour = colours[Math.floor(Math.random() * 8)];
  document.querySelector("body").style.backgroundColor = randomColour;
})
