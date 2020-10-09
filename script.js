const winningSquares = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 4, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
// Returns array of querylist. grid is called during enable/disableListeners
const grid = () => Array.from(document.getElementsByClassName("grid-item"));

const clickFn = (event) => console.log(event);
//Add eventListeners to check each element. Listener Added to quadrand element. Listen for "click", Run clickFn
const enableListeners = () =>
  grid().forEach((_qe1) => _qe1.addEventListener("click", clickFn));
const disableListeners = () =>
  grid().forEach((_qe1) => _qe1.removeEventListener("click", clickFn));
enableListeners();

console.log("Ready to work!");
