//This shows a grid with possible winning solutions
//Add eventListeners to check each element. Listener Added to quadrand element. Listen for "click", Run clickFn
//As a user, I should be able to start a new tic tac toe game.
const startButton = document.querySelector(".startbutton");
startButton.addEventListener("click", startOver);
enableListeners();

console.log("Ready to work!");
//As a user, I should be able to click on a square to add X first and then O, and so on
const playerSelect = document.querySelector('.xButton');
const oppSelect = document.querySelector('.yButton');
playerSelect.addEventListener('click', addXChar);
oppSelect.addEventListener('click', addYChar);

const addYChar = () => {
  
}
const addXChar = () => {
  
}
//As a user, I should be able to click on a square to add X first and then O, and so on
const altPlayer = 
const turnOffPlayerSelect
//As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next

//As a user, I should not be able to click the same square twice
//As a user, I should be shown a message when I win, lose or tie
//As a user, I should not be able to continue playing once I win, lose, or tie
//As a user, I should be able to play the game again without refreshing the page
