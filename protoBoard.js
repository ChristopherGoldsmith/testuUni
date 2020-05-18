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
let hand = [];
let finalR = [];
let score = 0;
let winHand = false;

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
let value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
let deck52 = [];

//deck generting functions
function deckGen(suit, value){
    this.name = `The ${value} of ${suit}`
    this.suit = suit,
    this.value = value
    this.matchV = [];
    this.matchS = [];
}

function makeDeck(){
    for(i = 0; i < suits.length; i++){
        for(j = 0; j < value.length; j++){
            deck52.push(new deckGen(suits[i], value[j]))
        }
    }
    shuffle(deck52);
};
function clearAndSet(){
    deck52 = [];
    hand = [];
    makeDeck();
    winHand = true;
    return draw();
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
        document.getElementById(`card${j + 1}`).innerHTML =`${hand[j].name}`
        j = j + 1;
    }
}
function delCard(n, m){
    document.getElementById(`card${hand.length}`).innerHTML = '';
    hand.splice(n, m);
    handPop();
    console.log(hand);
};
//Win condition and point functions
function scoreUp(s){
    score += s;
    document.getElementById('score').innerHTML = `${score}`
}
/*function checkValue(arr, num){
	let len = arr.length;
	for(i = len; i > 0; i--){
  	if(arr[i] <= num){
    	arr.splice(i, 1);
    }
  }
};*/
function matchingPlus(arr, matched){
    return arr.matchV.push(matched);
};
function matchingSuit(arr, matched){
    return arr.matchS.push(matched);
};

function checkValSame(arr){
    let len = arr.length;
    let j = 0;
    let k = 1;
    let l = 2;
    let m = 3;
    let caseVals = [j, k, l, m];
    for(i = len - 1; i >= 0; i--){
        cardValue = arr[i].value;
        cardSuit = arr[i].suit;
        for(x = 0; x < len; x++){
            if(cardSuit == hand[x].suit/* && arr[i].name != hand[x].name*/)
            matchingSuit(arr[i], hand[x]);
        };
        for(x = 0; x < len; x++){
            if(cardValue == hand[x].value/* && arr[i].name != hand[x].name*/)
            matchingPlus(arr[i], hand[x]);
        };
    };
        caseVals[i - 1] = caseVals[i - 1] + 1;
        console.log(arr);
        calcHand()
        clearAndSet();
 };

 function twoofKind(){
    let testy = [];
     for(i = 0; i < hand.length; i++){
        findV = hand[i].matchV.length;
        if(findV == 2){
            testy.push(findV);
        };
     };
     if(testy.length == 4){
         scoreUp(100);
         return console.log(`Two of a Kind ${score}`);
     } else {
         console.log('conditions not met!')
     };
 };
 function threeofKind(){
    let testy = [];
     for(i = 0; i < hand.length; i++){
        findV = hand[i].matchV.length;
        if(findV == 3){
            testy.push(findV);
        };
     };
     if(testy.length == 3){
         scoreUp(500);
         return console.log(`Three of a Kind ${score}`);
     } else {
         console.log('conditions not met!')
     };
 };
 function fullHouse(){
    let testy = [];
     for(i = 0; i < hand.length; i++){
        findV = hand[i].matchV.length;
        if(findV == 3){
            testy.push(findV);
        };
        if(findV == 2){
            testy.push(findV);
        };
     };
     if(testy.length == 5){
         scoreUp(750);
         return console.log(`Full House! ${score}`);
     } else {
         console.log('conditions not met!')
     };
 };
 function fourofKind(){
    let testy = [];
     for(i = 0; i < hand.length; i++){
        findV = hand[i].matchV.length;
        if(findV == 4){
            testy.push(findV);
        };
     };
     if(testy.length == 4){
         scoreUp(2000);
         return console.log(`Four of a Kind ${score}`);
     } else {
         console.log('conditions not met!')
     };
 };
 function flush(){
    let testy = [];
     for(i = 0; i < hand.length; i++){
        findS = hand[i].matchS.length;
        if(findS == 5){
            testy.push(findS);
        };
     };
     if(testy.length == 5){
         scoreUp(1000);
         return console.log(`Flush! ${score}`);
     } else {
         console.log('conditions not met!')
     };
 };
 function calcHand(){
    fullHouse();
    fourofKind();
    flush();
    twoofKind();
    threeofKind();
 };

const straight = [1000];// no objects with a matching value, but a straight sequence
const straightFlush = [7500];// both conditions for a straight and a flush
const royalFlush = [25000];// the conditions for a straightFlush but with 10, J, Q, K, A


//startup functions
document.onload = makeDeck();
document.onload = draw();