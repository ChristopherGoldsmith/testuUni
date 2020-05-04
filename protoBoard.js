// zones are hand, deck, discard, card pool, rfg, and opponents of all.  Common variables should be 
// damage, speed, block, control

//universal variables
let turn = false;
let deck = {
    oCount: 52,
    cCount: 52,
    contents: []
};
let char = 0;
let hand = []
let testy = []

//randomizer
var shuffle = function (array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

// Deck Generatiom Code
let suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
let value = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
let deck52 = [];

//deck generting functions
function deckGen(suit, value){
    this.suit = suit,
    this.value = value
}

function makeDeck(){
    k = 0;
    q = 0;
    i = 0;
    while(deck52.length != 52){
        deck52[i] = new deckGen(suits[k], value[q])
        q = q + 1;
        if (q == 13){
            k = k + 1;
            q = 0;
        }
        i = i + 1;
    }
    shuffle(deck52);
    console.log(deck52);
}

//draw and discard functions
function draw(){
    i = 0;
    n = 5
    while(n > i){
        hand.push(deck52[0]);
        deck52.shift();
        console.log(hand, deck52);
        i = hand.length;
     
    };
    handPop();
    return hand, deck52;
};

function handPop(){
    j = 0;
    while (j < hand.length){
        document.getElementById(`card${j + 1}`).innerHTML =`${hand[j].value} of ${hand[j].suit}`
        j = j + 1;
    }
}
function delCard(n, m){
    document.getElementById(`card${hand.length}`).innerHTML = '';
    hand.splice(n, m);
    handPop();
    console.log(hand);
};

function draw2(){
    draw();
    scoreCalc();
};

function scoreCalc(){

}
document.onload = makeDeck();
document.onload = draw();