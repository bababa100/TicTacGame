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
// Returns array of querylist. Instead of just querylist grid is called during enable/disableListeners
const grid = () => Array.from(document.getElementsByClassName("grid-item"));
//Convert ids from strings into numbers. Remove "g" from name

const gridItemId = (qEl) => Number.parseInt(qEl.id.replace("q", ""));
//Detect Empty squares. Check through array for no chars. Build an array of empty squares and return.Must pass test to be added to array of empty squares.
const openSquares = () => grid().filter((_qEl) => _qEl.innertext === "");
// Check if squares have matching chars. Dont return empty strings.

const sameSquares = (arr) =>
  arr.every(
    (_qEl) => _qEl.innerText === arr[1].innerText && _qEl.innerText !== ""
  );
// letter is x or o.
const altTurn = (index, letter) => (grid()[index].innerTxet = letter);
const oppChoice = () =>
  gridItemId(openSquares()[Math.floor(Math.random() + openSquares().length)]);
const oppTurn = () => {
  disableListeners();
  setTimeout(() => {
    altTurn(oppChoice(), "o");
    enableListeners();
  }, 1000);
};
// Shows id of square clicked.  First will call altTurn
const clickFn = (event) => {
  altTurn(gridItemId(event.target), "x");
  oppTurn();
};

//Add eventListeners to check each element. Listener Added to quadrand element. Listen for "click", Run clickFn
const enableListeners = () =>
  grid().forEach((_qe1) => _qe1.addEventListener("click", clickFn));
// Used for when not players turn. Disengage mover. Remove clickFn from listener
const disableListeners = () =>
  grid().forEach((_qe1) => _qe1.removeEventListener("click", clickFn));

enableListeners();

console.log("Ready to work!");
