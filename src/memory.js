class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if(!this.cards) return undefined
    let cardsCopy = [...this.cards];
    let cardsCopyLength = cardsCopy.length;
    let shuffledArray = [];

    for (let i = 0; i < cardsCopyLength; i++) {
      if (cardsCopy.length === 1) {
        shuffledArray.push(cardsCopy[0]);
      } else {
        let randomIndex = Math.floor(Math.random() * cardsCopy.length);
        let removedElementArr = cardsCopy.splice(randomIndex, 1);

        shuffledArray.push(...removedElementArr);
      }
    }
  
    this.cards = shuffledArray;
    
  }

  

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked++;
    
    if (card1 === card2) {
      this.pairsGuessed++
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    
    if (this.pairsGuessed === 0) return false;
    return this.pairsGuessed === this.cards.length/2 ? true : false;
  }
}

const array = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' }
];

let game = new MemoryGame(array);

game.shuffleCards(game.cards)

game.pairsGuessed = 8;

game.checkIfFinished()