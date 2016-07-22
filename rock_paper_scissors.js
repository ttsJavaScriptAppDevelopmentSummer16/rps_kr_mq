function sample(length) {
  return parseInt(Math.random() * length) % length;
}

function playerOneWins(p1, p2) {
  var test = (p1 === "rock" && p2 === "scissors") ||
             (p1 === "scissors" && p2 === "paper") ||
             (p1 === "paper" && p2 === "rock");
  return test;
}

var weapons = ["rock", "paper", "scissors"];

var playerOneScore = 0;
var playerTwoScore = 0;

var playerOneWeapon = weapons[sample(3)];
var playerTwoWeapon = weapons[sample(3)];

while (playerOneScore < 3 && playerTwoScore < 3) {
  var playerOneWeapon = weapons[sample(3)];
  var playerTwoWeapon = weapons[sample(3)];
  console.log("Player One chooses " + playerOneWeapon + ".")
  console.log("Player Two chooses " + playerTwoWeapon + ".")
  if (playerOneWeapon === playerTwoWeapon) {
    console.log("Players have tied.")
  } else if (playerOneWins(playerOneWeapon, playerTwoWeapon)) {
    playerOneScore++;
    console.log("Player One wins, with a total score of " + playerOneScore + ".");
  } else {
    playerTwoScore++;
    console.log("Player Two wins, with a total score of " + playerTwoScore + ".");
  }
}
