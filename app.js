var grid = document.querySelector(".grid");
var turn = document.querySelector(".turn");
var resetBtn = document.querySelector(".reset");
var span1 = document.querySelector('.score .p1 span');
var span2 = document.querySelector('.score .p2 span');

let array = [];
var count = 0;
let p1score = 1;
let p2score = 1;

function cardBoard() {
  for (let i = 1; i < 10; i++) {
    var img = document.createElement("img");
    img.setAttribute("src", "img/back.jpg");
    img.setAttribute("class", i);
    img.classList.add("imgs", "show");
    grid.appendChild(img);
    img.addEventListener("click", flipCard);
  }

  function flipCard() {
    if (count === 0) {
      fctPlayerOne();
      count++;
      turn.innerHTML = `Player 2`;
    } else if (count == 1) {
      fctPlayerTwo();
      count = 0;
      turn.innerHTML = "Player 1";
    }
  }

  function fctPlayerOne() {
    let cardClicked = event.target;
    cardClicked.setAttribute("src", "img/x.png");
    cardClicked.classList.add("x");
    cardClicked.classList.remove("show");
    cardClicked.removeEventListener("click", flipCard, false);
    array.push(1);
    let active = true;
    array.length === 9 ? finished() : (active = false);

    var imgs = document.querySelectorAll("img");
    setTimeout(() => {
      if(
      imgs[0].classList.contains("x") &&
      imgs[1].classList.contains("x") &&
      imgs[2].classList.contains("x") || 
      imgs[0].classList.contains("x") &&
      imgs[3].classList.contains("x") &&
      imgs[6].classList.contains("x") ||
      imgs[3].classList.contains("x") &&
      imgs[4].classList.contains("x") &&
      imgs[5].classList.contains("x") ||
      imgs[6].classList.contains("x") &&
      imgs[7].classList.contains("x") &&
      imgs[8].classList.contains("x") ||
      imgs[1].classList.contains("x") &&
      imgs[4].classList.contains("x") &&
      imgs[7].classList.contains("x") ||
      imgs[2].classList.contains("x") &&
      imgs[5].classList.contains("x") &&
      imgs[8].classList.contains("x") ||
      imgs[0].classList.contains("x") &&
      imgs[4].classList.contains("x") &&
      imgs[8].classList.contains("x") ||
      imgs[2].classList.contains("x") &&
      imgs[4].classList.contains("x") &&
      imgs[6].classList.contains("x")){
        alert(`Player 1 win!`)
        span1.innerHTML= p1score++;
        resetFct();
      };
    },500);
    
  }

  function fctPlayerTwo() {
    cardClicked = event.target;
    cardClicked.setAttribute("src", "img/0.png");
    cardClicked.classList.add("0");
    cardClicked.classList.remove("show");
    cardClicked.removeEventListener("click", flipCard, false);
    array.push(1);
    let active = true;
    array.length === 9 ? finished() : (active = false);

    var imgs = document.querySelectorAll("img");

    let winner;
    setTimeout(() => {
      if (
      imgs[1].classList.contains("0") &&
      imgs[0].classList.contains("0") &&
      imgs[2].classList.contains("0") || 
      imgs[0].classList.contains("0") &&
      imgs[3].classList.contains("0") &&
      imgs[6].classList.contains("0") ||
      imgs[3].classList.contains("0") &&
      imgs[4].classList.contains("0") &&
      imgs[5].classList.contains("0") ||
      imgs[6].classList.contains("0") &&
      imgs[7].classList.contains("0") &&
      imgs[8].classList.contains("0") ||
      imgs[1].classList.contains("0") &&
      imgs[4].classList.contains("0") &&
      imgs[7].classList.contains("0") ||
      imgs[2].classList.contains("0") &&
      imgs[5].classList.contains("0") &&
      imgs[8].classList.contains("0") ||
      imgs[0].classList.contains("0") &&
      imgs[4].classList.contains("0") &&
      imgs[8].classList.contains("0") ||
      imgs[2].classList.contains("0") &&
      imgs[4].classList.contains("0") &&
      imgs[6].classList.contains("0")){
        winner = 1 && alert(`Player 2 win!`)
        span2.innerHTML= p2score++;
        resetFct();
      }
        
    },500);
  }

  resetBtn.addEventListener("click", resetScore);

function resetScore() {
  span1.innerHTML= 0;
  span2.innerHTML= 0;
}

  function resetFct() {
    var imgs = document.querySelectorAll("img");

    imgs.forEach((img) => {
      for (let i = 1; i < 10; i++) {
        img.setAttribute("class", i);
        img.classList.add("imgs", "show");
        img.setAttribute("src", "img/back.jpg");
        img.addEventListener("click", flipCard);
        array = [];
       
      }
    });
  }
}

function finished() {
  setTimeout(function () {
    alert("All cards are unfolded!");
    var imgs = document.querySelectorAll("img");
    console.log(imgs);
  }, 500);
}

cardBoard();
