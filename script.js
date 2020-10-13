const winningSquares = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];
// Returns array of querylist. Instead of just querylist grid is called during enable/disableListeners
const grid = () => Array.from(document.getElementsByClassName("q"));
//Convert ids from strings into numbers. Remove "g" from name

const gridItemId = (qEl) => Number.parseInt(qEl.id.replace("q", ""));
//Detect Empty squares. Check through array for no chars. Build an array of empty squares and return.Must pass test to be added to array of empty squares.
const openSquares = () => grid().filter((_qEl) => _qEl.innertext === "");
// Check if squares have matching chars. Dont return empty strings.

const sameSquares = (arr) =>
  arr.every(
    (_qEl) => _qEl.innerText === arr[0].innerText && _qEl.innerText !== ""
  );
// letter is x or o.
const takeTurn = (index, letter) => (grid()[index].innerText = letter);
const oppChoice = () =>
  gridItemId(openSquares()[Math.floor(Math.random() + openSquares().length)]);

const startOver = (winningSquares) => {
  winningSquares.forEach((_qEl) => _qEl.classList.add("winner"));
  disableListeners();
};

const checkWin = () => {
  let victory = false;
  winningSquares.forEach((_c) => {
    const _grid = grid();
    const sequence = [_grid[_c[0]], _grid[_c[1]], _grid[_c[2]]];
    if (sameSquares(sequence)) {
      victory = true;
      startOver(sequence);
    }
  });
  return victory;
};
const oppTurn = () => {
  disableListeners();
  setTimeout(() => {
    takeTurn(oppChoice(), "o");
    if (checkWin()) enableListeners();
  }, 1000);
};
// Shows id of square clicked.  First will call takeTurn
const clickFn = (event) => {
  takeTurn(gridItemId(event.target), "x");
  if (checkWin()) oppTurn();
};

//Add eventListeners to check each element. Listener Added to quadrand element. Listen for "click", Run clickFn
const enableListeners = () =>
  grid().forEach((qEl) => qEl.addEventListener("click", clickFn));
// Used for when not players turn. Disengage mover. Remove clickFn from listener
const disableListeners = () =>
  grid().forEach((qEl) => qEl.removeEventListener("click", clickFn));

enableListeners();

console.log("Ready to work!");
