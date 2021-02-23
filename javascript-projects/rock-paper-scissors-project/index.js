var moveOptions = ["Rock", "Paper", "Scissors"];
var message = ["You lost", "Its a tie", "You won"];
var buttonSelector = document.querySelectorAll("button");
var usersSelection;
var computerScore = 0;
var usersScore = 0;

//Event listener for the three game buttons.
//Updates variable userOption with corresponding button data
for (i = 0; i < 3; i++) {
  buttonSelector[i].addEventListener("click", function() {
    usersSelection = this.innerHTML;

    // returns computers move and checks to see the winner
    var computersSelection = computersMove();
    var winner = checkWinner(usersSelection, computersSelection);

    // update score and print message from array to screen
    document.querySelector('.message').innerHTML = message[winner];
    document.querySelector('.score').innerHTML =
                  "You: " + usersScore + " Comp: " + computerScore;
  });
}

// Generates a number between 0 - 2 and returns either
//the computers move as a string from the moveOptions array
function computersMove() {
  var randNum = Math.floor(Math.random() * 3);
  return moveOptions[randNum];
}

// Checks who is the winner and returns an integer
//0 = user lost, 1 = tie, 2 = user won
//also updates score variables
function checkWinner(user, computer) {

  if (user === computer) {
    return 1;
  }

  if (user === "Rock") {
    if (computer === "Scissors") {
      usersScore++;
      return 2;
    }
    else if (computer === "Paper"){
      computerScore++;
      return 0;
    }
  }

  if (user === "Scissors") {
    if (computer === "Paper") {
      usersScore++;
      return 2;
    } else if (computer === "Rock"){
      computerScore++;
      return 0;
    }
  }

  if (user === "Paper") {
    if (computer === "Rock") {
      usersScore++;
      return 2;
    } else if (computer === "Scissors"){
      computerScore++;
      return 0;
    }
  }

}
