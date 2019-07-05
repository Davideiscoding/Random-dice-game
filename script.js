var randomNumber1 = Math.floor(Math.random() * (6 - 1) + 1);

var randomNumber2 = Math.floor(Math.random() * (6 - 1) + 1);

var winner = document.querySelector("h1");

var diceImage1 = document.querySelector(".img1");

diceImage1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var diceImage2 = document.querySelector(".img2");

diceImage2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2) {
  winner.innerHTML = "Player 1 won!";
} else if (randomNumber1 < randomNumber2) {
  winner.innerHTML = "Player 2 won!";
} else {
  winner.innerHTML = "It's a draw!";
}
