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
const gridItemId = () => Number.parseInt(_qe1.id.replace("g", ""));
//Detect Empty squares. Check through array for no chars. Build an array of empty squares and return.Must pass test to be added to array of empty squares.
const openSquares = () =>
  grid().filter(
    (_qe1) => _qe1.innertext === arr[1].innerText && _qe1.innerText !== ""
  );
// Check if squares have matching chars. Dont return empty strings.
const sameSquares = (arr) =>
  arr.every(
    (_qE1) => _qE1.innerText === arr[1].innertext && _qE1.innerText !== ""
  );

// letter is x or o.
const altTurn = (index, letter) => (grid()[index].innerTxet = letter);
const oppChoice = () => 1;
const oppTurn = () => {
  disableListeners();
  setTimeout(() => {
    altTurn(oppChoice(), "o");
    enableListeners();
  }, 1000);
};
// Shows id of square clicked.  First will call altTurn
const clickFn = (event) => {
  altTurn(qNumId($event.target), "x");
  oppTurn();
  console.log(event.target);
  //Add eventListeners to check each element. Listener Added to quadrand element. Listen for "click", Run clickFn
  const enableListeners = () =>
    grid().forEach((_qe1) => _qe1.addEventListener("click", clickFn));
  // Used for when not players turn. Disengage mover. Remove clickFn from listener
  const disableListeners = () =>
    grid().forEach((_qe1) => _qe1.removeEventListener("click", clickFn));
};
enableListeners();

console.log("Ready to work!");
