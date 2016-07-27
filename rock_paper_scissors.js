function sample(length) {
  return parseInt(Math.random() * length) % length;
}

function playerOneWins(p1, p2) {
  var test = (p1 === "rock" && p2 === "scissors") ||
             (p1 === "scissors" && p2 === "paper") ||
             (p1 === "paper" && p2 === "rock");
  return test;
}

function getHand(){
  var weapons = ["rock", "paper", "scissors"];
  return weapons[sample(3)];
}

var playerOne = {
  name: "James",
  getHand: function(){
    var weapons = ["rock", "paper", "scissors"];
    return weapons[sample(3)];
  },
  score: 0
}

var playerTwo = {
  name: "Kevin",
  getHand: function(){
    var weapons = ["rock", "paper", "scissors"];
    return weapons[sample(3)];
  },
  score: 0
}

function playRound(p1, p2){
  var playerOneWeapon = p1.getHand();
  var playerTwoWeapon = p2.getHand();
  if (playerOneWeapon === playerTwoWeapon) {
    return null;
  } else if (playerOneWins(playerOneWeapon, playerTwoWeapon)) {
    p1.score++;
    return p1;
  } else {
    p2.score++;
    return p2;
  }
}

function playGame(player1, player2, playUntil){
  while (player1.score < playUntil && player2.score < playUntil) {
    playRound(player1, player2)
  }
}

playGame(playerOne,playerTwo,5);
