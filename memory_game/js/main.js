console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User Flipped" + " " + cardOne);

var cardTwo = cards[1];

cardsInPlay.push(cardTwo);

console.log("User Flipped" + " " + cardTwo);

if (cardsInPlay.length === 2){
   if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You Found a Match!");
   }
   else {
   	alert("Sorry, try again.");
   }
}
