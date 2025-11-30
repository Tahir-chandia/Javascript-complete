//4. Create a “Number Knock” game. (ask the user to keep guessing the number
//until the user enters correct guess) .


let computerNumber = 6;
let lives = 3;
let guessNumber;

while (lives > 0) {
  guessNumber = Number(prompt("Enter guess number"));

  if (isNaN(guessNumber)) {
    console.log("Your number is not valid.");
    lives--;
  } else if (guessNumber < computerNumber) {
    console.log(`Your number ${guessNumber} is too low.`);
    lives--;
  } else if (guessNumber > computerNumber) {
    console.log(`Your number ${guessNumber} is too high.`);
    lives--;
  } else {
    console.log("Congratulations! You won the game.");
    break; // Correct guess; exit the loop
  }

  console.log(`You have ${lives} lives left.`);
}

if (lives === 0) {
  console.log("You lose.");
  console.log("Game over.");
}