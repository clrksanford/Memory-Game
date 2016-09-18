var cards = ['queen', 'queen', 'king', 'king'];
var newCard;
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

//Generate each of the four cards within game-board
for (var i=0; i<cards.length; i++) {
        newCard = document.createElement('div');
        newCard.setAttribute('class','card');
        gameBoard.appendChild(newCard);
    
        //Now give card divs attributes corresponding to game values (i.e. king or queen)
        newCard.setAttribute('data-card', cards[i]);    
    
        //Create click event that 1) Displays image and 2) Compares the cards clicked when 2 cards are in play
        if(cards[i] === "queen") {
            newCard.addEventListener('click',  function() {
               this.innerHTML =  "<img src='Queen.jpg' alt='Queen'>";
            });
        } else {
            newCard.addEventListener('click', function() {
               this.innerHTML = "<img src='King.jpg' alt='King'>" 
            });
        }
        
        //Create click event that compares 2 cards if there are 2 cards active
        newCard.addEventListener('click', isTwoCards);
}

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

      // if you have two cards in play check for a match
        if (cardsInPlay.length === 2) {

            // pass the cardsInPlay as an argument to isMatch function
            isMatch(cardsInPlay);

            // clear cards in play array for next try
            cardsInPlay = [];

  }

}

var cardsList; 

//Define function to reset game board
function reset() {
            cardsList = document.getElementsByClassName('card');
            for (var i=0; i<cardsList.length; i++) {
                if(cardsList[i].hasChildNodes()) {
                    cardsList[i].removeChild(cardsList[i].childNodes[0]);   
                }
            }
        }

//checks for a match between the 2 cards in play
function isMatch(cardArray) {
    if(cardArray[0] === cardArray[1]) {
        
        function youWon() {
            alert("You found a match!");
        }
    
        window.setTimeout(youWon,500);
    } else { 
        
        //Clear out the cards' innerHTML, aka reset the board
        
        window.setTimeout(reset,1000);
    }
}

var resetBtn = document.getElementById('button');

resetBtn.addEventListener('click', reset);

//!!!OLD CODE FROM PREVIOUS EXERCISES ----- IGNORE!!!!

//Define variables corresponding to the 4 cards

/*
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";

var gameBoard = document.getElementById('game-board');

function createBoard () {
    for (var i=0; i<4; i++) {
        var newCard = document.createElement('div');
        newCard.setAttribute('class','card');
        gameBoard.appendChild(newCard);
    }
}

createBoard();
*/

/*
if (cardOne === cardTwo) {
    alert("Sorry, try again");   
} else if (cardOne === cardThree) {
    alert("You found a match!");   
} else if (cardTwo === cardFour) {
    alert("You found a match!");   
}
*/