$(document).ready(function() {

  var secretNumber = Math.floor(Math.random()*10);

  var name = prompt("What's your name?");

  alert("Okay " + name + ", the goal of this game is to guess the secret number. It is between 0 and 10. You have 3 guesses.");

  var guess;
  var guessCount = 3

  function getGuess() {
   guess = prompt("What is your guess?");
  };

  getGuess();

  var $list = $("#guesses ul");

  while (guessCount !== 0) {
    if (isNaN(guess) || guess < 0 || guess > 10 || guess === "") {
      alert("Invalid input! Please guess a number between 0 and 10");
      getGuess();
    } else {
      if (guess == secretNumber) {
        $list.append('<li>You guessed correctly! ' + guess + ' was the number!</li>')
        guessCount = 0
      } else {
        if (guess > secretNumber) {
          $list.append('<li>You guessed ' + guess + '. Too high!</li>');
        } else {
          $list.append('<li>You guessed ' + guess + '. Too low!</li>');
        };
        guessCount -= 1
      };
      if (guessCount !== 0) {
        getGuess();
      } else if (guessCount === 0 && guess != secretNumber) {
        alert("Sorry, you're out of guesses. You lose!");
      };
    };
  };
});
