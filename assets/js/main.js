const sideX = document.querySelector(".markX");
const sideO = document.querySelector(".markO");
const sideXimg = document.querySelector(".xImg");
const sideOimg = document.querySelector(".oImg");
const menuCont = document.querySelector(".menu");
const gameCont = document.querySelector(".game");
const playMultiBtn = document.querySelector("#multi");
const cells = document.querySelectorAll(".box");
let currentPlayer = "X";
let sideImg = "";
// pick side from menu
sideX.addEventListener("click", () => {
  sideO.classList.remove("active");
  sideX.classList.add("active");
  sideXimg.src = "assets/img/navy-x.svg";
  sideOimg.src = "assets/img/gray-o.svg";
  currentPlayer = `${sideX.value}`;
});
sideO.addEventListener("click", () => {
  sideO.classList.add("active");
  sideX.classList.remove("active");
  sideXimg.src = "assets/img/gray-x.svg";
  sideOimg.src = "assets/img/navy-o.svg";
  currentPlayer = `${sideO.value}`;
});
// play game
function showGame() {
  menuCont.style.display = "none";
  gameCont.style.display = "flex";
}

playMultiBtn.addEventListener("click", () => {
  showGame();
});
const boardState = Array(9).fill(null);
cells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});

function handleCellClick(event) {
  const cell = event.target;
  const cellIndex = cell.getAttribute("data-index");

  if (boardState[cellIndex] || checkWinner()) {
    return;
  }

  boardState[cellIndex] = currentPlayer;
  cell.textContent = "";

  const img = document.createElement("img");
  img.src =
    currentPlayer === "X" ? "assets/img/icon-x.svg" : "assets/img/icon-o.svg";
  img.alt = currentPlayer;

  cell.appendChild(img);

  if (checkWinner()) {
    alert(`Player ${currentPlayer} wins!`);
  } else if (boardState.every((cell) => cell)) {
    alert("It's a draw!");
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  return winningCombinations.some((combination) => {
    const [a, b, c] = combination;
    return (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    );
  });
}
