// Variables declaration
var DEFAULT_BANK = 100;
var kings = [];
var queens = [];
var jacks = [];

/**
 * Function at the first opening of the page only
 * */
window.onload = function() {

	// Give the user the default amount of money
	document.getElementById("bank").innerHTML = DEFAULT_BANK;
}

/**
 * generateDeck function
 * to generate the cards that are going to be used
 * */
function generateDeck() {

	// Kings cards
	kings.push("King of spades");
	kings.push("King of hearts");
	kings.push("King of clubs");
	kings.push("King of diamonds");

	// Queens cards
	queens.push("Queen of spades");
	queens.push("Queen of hearts");
	queens.push("Queen of clubs");
	queens.push("Queen of diamonds");

	// Jacks cards
	jacks.push("Jack of spades");
	jacks.push("Jack of hearts");
	jacks.push("Jack of clubs");
	jacks.push("Jack of diamonds");
}

/**
 * startGame function
 * to simply play the game!
 * */
function startGame() {

	// Variables declaration
	var types = ["spades", "hearts", "clubs", "diamonds"];
	var fullSet = 0;

	// Storing values from HTML-file in two variables
	var bid = parseInt(document.getElementById("bid").value);
	var bank = parseInt(document.getElementById("bank").innerHTML);

	// Picking three random cards using a dedicated function
	randomKing = pickRandomCard(kings);
	randomQueen = pickRandomCard(queens);
	randomJack = pickRandomCard(jacks);

	// Displaying those three cards
	displayCards();

	// Removing bid from money amount
	if (bid <= bank && bid > 0) {

		// Bid gets removed
		bank -= bid;

		// Amount of money changes
		document.getElementById("bank").innerHTML = bank;
	}

	// If the user hasn't bet anything
	else if (bid == 0) {

		// Ask him politely to do it
		alert("Please bet something!");
	}

	// If the user has no more money
	else {

		// Tell him that it's not looking to good
		alert("You don't have enough money!");
	}

	// First loop : to check if we got a full set of cards of the same kind
	for (i = 0; i < types.length - 1; i++) {

		// If all the cards are of the same kind
		if (randomKing[0].endsWith(types[i]) && randomQueen[0].endsWith(types[i])
		&& randomJack[0].endsWith(types[i])) {

			// We do have a full set of cards of the same kind
			fullSet += 1;

			// Give back the user twice the amount of his bet
			document.getElementById("bank").innerHTML = bank + (bid * 2);

			// Tell him he just got a fat paycheck
			alert("Gain : " + (bid * 2));
		}
	}

	// If unfortunately we do not have a set of cards of the same kind
	if (fullSet != 1) {

		// Second loop : to see if we have a set of cards of the same color
		for(i = 0; i < 1; i++) {

			// If all the cards are black
			if ((randomKing[0].endsWith(types[0]) || randomKing[0].endsWith(types[2]))
			&& (randomQueen[0].endsWith(types[0]) || randomQueen[0].endsWith(types[2]))
			&& (randomJack[0].endsWith(types[0]) || randomJack[0].endsWith(types[2]))) {

				// Give back the user the amount of his bet
				document.getElementById("bank").innerHTML = bank + bid;

				// Inform him about it
				alert("Gain : " + bid);

				// Exit the loop
				break;
			}

			// If all the cards are red
			else if ((randomKing[0].endsWith(types[1]) || randomKing[0].endsWith(types[3]))
			&& (randomQueen[0].endsWith(types[1]) || randomQueen[0].endsWith(types[3]))
			&& (randomJack[0].endsWith(types[1]) || randomJack[0].endsWith(types[3]))) {

				// Give back the user the amount of his bet
				document.getElementById("bank").innerHTML = bank + bid;

				// Inform him about it
				alert("Gain : " + bid);

				// Exit the loop
				break;
			}
		}
	}	
}

/**
 * pickRandomCard function
 * to randomly select a card in a given deck
 *
 * @param {String[]} cardDeck said deck
 * @return {String[]} the randomly-chosen card
 * */
function pickRandomCard(cardDeck) {

	// Variables declaration
	var deckSize = cardDeck.length;
	var randomCard = [];
	var randomNumber;

	// Browsing card deck
	while (deckSize) {

		// Selecting a random number
		randomNumber = Math.floor(Math.random() * deckSize--);

		// Taking the corresponding card in the deck
		randomCard.push(cardDeck.splice(randomNumber, 1)[0]);
	}

	// Sending the card
	return randomCard;
}

/**
 * displayCards function
 * to display the three cards of the exercise
 * */
function displayCards() {

	// Variables declaration
	var kingCardDisplay = randomKing[0] + ".png";
	var queenCardDisplay = randomQueen[0] + ".png";
	var jackCardDisplay = randomJack[0] + ".png";

	// Searching the cards in img/ and displaying them
	document.getElementById("cards").innerHTML = "<img src='img/" + kingCardDisplay + "'>";
	document.getElementById("cards").innerHTML += "<img src='img/" + queenCardDisplay + "'>";
	document.getElementById("cards").innerHTML += "<img src='img/" + jackCardDisplay + "'>";	
}

/**
 * Main function
 * */
function main() {

	// Generate the cards
	generateDeck();

	// Launch the game
	startGame();
}
