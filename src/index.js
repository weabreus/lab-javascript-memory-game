const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

let clickedPairsSpan = document.getElementById("pairs-clicked");
let guessedPairsSpan = document.getElementById("pairs-guessed");
let board = document.querySelector("#memory-board");

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  board.innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card, key) => {
    card.addEventListener("click", () => {
      // TODO: write some code here
      if (memoryGame.pickedCards.length < 2) {
        card.classList.toggle("turned");

        //push selected card name to selected array
        memoryGame.pickedCards.push(card);

        // if length of picked cards is 2 call check if Pair

        if (memoryGame.pickedCards.length === 2) {
          let checkResult = memoryGame.checkIfPair(
            ...memoryGame.pickedCards.map((card) =>
              card.getAttribute("data-card-name")
            )
          );

          clickedPairsSpan.innerHTML = memoryGame.pairsClicked;
          if (!checkResult) {
            setTimeout(() => {
              memoryGame.pickedCards.forEach((card) =>
                card.classList.toggle("turned", false)
              );
              memoryGame.pickedCards = [];
            }, 2000);
          } else {
            memoryGame.pickedCards.forEach((card) =>
              card.classList.toggle("blocked")
            );
            memoryGame.pickedCards = [];
            guessedPairsSpan.innerHTML = memoryGame.pairsGuessed;
            if (memoryGame.checkIfFinished()) {
              alert("You won!");
              memoryGame.shuffleCards();
              html = "";
              memoryGame.cards.forEach((pic) => {
                html += `
                <div class="card" data-card-name="${pic.name}">
                  <div class="back" name="${pic.img}"></div>
                  <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
                </div>
              `;
              });
              board.innerHTML = html;

              memoryGame.pairsClicked = 0;
              memoryGame.pairsGuessed = 0;
              clickedPairsSpan.innerHTML = 0;
              guessedPairsSpan.innerHTML = 0;
            }
          }
        }
      }
    });
  });
});
