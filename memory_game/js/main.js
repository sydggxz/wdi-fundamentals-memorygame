console.log("Up and running!");
var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    }
];
var cardsInPlay = [];
var score = 0;
var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        score++;
        refreshScore();
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}
var flipCard = function() {
    let cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
    console.log(`User flipped ${cards[cardId].rank}`);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}
var createBoard = function() {
    for (let i = 0; i< cards.length; i++) {
        const cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.querySelector('#game-board').appendChild(cardElement);
    }
}
var resetBoard = function() {
    let gameBoard = document.querySelector('#game-board');
    while (gameBoard.firstChild) {
        gameBoard.removeChild(gameBoard.firstChild);
    }
    cardsInPlay = [];
    createBoard();
}
var refreshScore = function() {
    document.querySelector('#game-score').textContent = score;
}
document.querySelector('#reset-board').addEventListener('click', resetBoard);
createBoard();
refreshScore();
