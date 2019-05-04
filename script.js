//use for loop to create 52 cards from deck variable
//by Olowo Olukayode

let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let values = ["Ace", "King", "Queen", "Jack", "Ten", 
			"Nine", "Eight", "Seven", "Six", "Five",
			"Four", "Three", "Two"] ;

//DOM-variables
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitButton = document.getElementById('hit-button');
let stayButton = document.getElementById('stay-button');

hitButton.style.display = 'none';
stayButton.style.display = 'none';
//showStatus();
newGameButton.addEventListener('click', function () {
	gameStarted = true;
	gameOver = false;
	playerWon = false;
	deck = createDeck();
	shuffleDeck(deck);
	dealerCards = [getNextCard(), getNextCard() ];
	playerCards = [getNextCard(), getNextCard() ];
	textArea.innerText = "Started...";
	newGameButton.style.display = 'none';
	hitButton.style.display = 'inline';
	stayButton.style.display = 'inline';
	//showStatus();
});

let gameStarted = false;
let gameOver = false;
let playerWon = false;
let dealerCards = [];
let playerCards = [];
let playerScore = 0;
let dealerScore = 0;
let deck = []; 

function createDeck() {
	let deck = [];
	for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
	for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
	let card = {
		suit: suits[suitIdx],
		value: values[valueIdx]
	}
	deck.push(card);
	}
}
	return deck;
}

function shuffleDeck(deck) {
	for (let i = 0; i < deck.length; i++) {
		let swapIdx = Math.trunc(Math.random() * deck.length);
		let tmp = deck[swapIdx];
		deck[swapIdx] = deck[i];
		deck[i] = tmp;
	}
}

for (let i = 0; i < deck.length; i++) {
	textArea.innerText += '\n' + getCardString(deck[i]);
}

function getCardString(card) {
	return card.value + " of " + card.suit;
}
function getNextCard() {
	return deck.shift();
}

/*function showStatus() {
	if (!gameStarted) {
		textArea.innerText = "Welcome to my Blackjack game..."
		return;
	}
}*/
let dealerCardString = '';
for (let i = 0; i < dealerCards.length; i++) {
	dealerCardString += getCardString(dealerCards[i]) + '\n';
}

let playerCardString = '';
for (let i = 0; i < playerCards.length; i++) {
	playerCardString += getCardString(playerCards[i]) + '\n';
}

textArea.innerText = 'Dealer has: \n' + dealerCardString + 'score: '+ dealerScore + ')\n\n' + 
					'Player has: \n' + playerCardString + 'score: '+ playerScore + ')\n\n' ;

if (gameOver) { 
	if (playerWon) {
		textArea.innerText += "CONGRATULATIONS, YOU WIN";
	}
	else {
		textArea.innerText += "SORRY, DEALER WINS";
	}
	newGameButton.style.display = 'none';
	hitButton.style.display = 'inline';
	stayButton.style.display = 'inline';
}



/*let playerCards = [deck[0], deck[2]];
console.log("Welcome to Blackjack!");

console.log("You are dealt:");
console.log("", getCardString(deck[0]) ); //playerCards[0]
console.log("", getCardString(deck[2]) ); //playerCards[1] */