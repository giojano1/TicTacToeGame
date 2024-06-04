const sideX = document.querySelector(".markX");
const sideO = document.querySelector(".markO");
const sideXimg = document.querySelector(".xImg");
const sideOimg = document.querySelector(".oImg");
const menuCont = document.querySelector(".menu");
const gameCont = document.querySelector(".game");
const playCpuBtn = document.querySelector("#comp");
const playMultiBtn = document.querySelector("#multi");
const box = document.querySelectorAll(".box");
let player1Side = "";
// pick side from menu
sideX.addEventListener("click", () => {
  sideO.classList.remove("active");
  sideX.classList.add("active");
  sideXimg.src = "assets/img/navy-x.svg";
  sideOimg.src = "assets/img/gray-o.svg";
  player1Side = sideX.value;
  console.log(player1Side);
});
sideO.addEventListener("click", () => {
  sideO.classList.add("active");
  sideX.classList.remove("active");
  sideXimg.src = "assets/img/gray-x.svg";
  sideOimg.src = "assets/img/navy-o.svg";
  player1Side = sideO.value;
  console.log(player1Side);
});
// play game
function showGame() {
  menuCont.style.display = "none";
  gameCont.style.display = "flex";
}
// cpu
playCpuBtn.addEventListener("click", () => {
  showGame();
  box.forEach((cont) => {
    cont.addEventListener("click", () => {
      if (cont.childElementCount === 0) {
        const symbol = document.createElement("img");
        symbol.src = "assets/img/icon-x.svg";
        cont.appendChild(symbol);
      }
    });
  });
});

// multiplayer
playMultiBtn.addEventListener("click", () => {
  showGame();
});
