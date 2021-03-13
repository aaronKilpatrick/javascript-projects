//Hex array
var hexcodeArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

//Event Listener attached to #btn. Changes background and appends
//hexcode to span #hex-value on click
document.getElementById("btn").addEventListener("click", function() {
  var hexcode = "#" + hexcodeCreator();

  //changes background color of body
  document.querySelector("body").style.backgroundColor = hexcode;
  //Appends hexcode to span after "Hex Color";
  document.getElementById("hex-value").innerHTML = hexcode;

})

//creates the 6 digit hexcode
function hexcodeCreator() {
  var hex = "";
  //loops 6 times and assigns the hexbit taken from hexcodeArray
  //and adds it to hex
  for (i = 0; i < 6; i++) {
    //creates a random number between 0 - 15
    var randomNumber = Math.floor(Math.random() * 16);
    hex += hexcodeArray[randomNumber];
  }
  return hex;
}