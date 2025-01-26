function startgame(){
  let isFinished = false;
// Generate a random number between 1 and 100 (inclusive)
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = document.getElementById("txtInput").value;
do{
  guessCount = Number(guessCount);
  // Check if the user's guess is correct
  if (guessCount === randomNumber) {
    // If correct, display congratulatory message and break out of the loop
    window.alert("Congratulations! You guessed the number in " + guessCount + " guess(es).");
    isFinished = true;
  } else if (guessCount < randomNumber) {
    // If the guess is lower than the random number, prompt the user to guess higher
    window.alert("Higher");
    isFinished = false;
  } else {
    // If the guess is higher than the random number, prompt the user to guess lower
    window.alert("Lower");
    isFinished = false;
  }
}
while(!isFinished);
}