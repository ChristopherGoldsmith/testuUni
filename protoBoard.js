// zones are hand, deck, discard, card pool, rfg, and opponents of all.  Common variables should be 
// damage, speed, block, control
let turn = false;
let deck = {
    oCount: 52,
    cCount: 52,
    contents: []
};
let char = 0;
let hand = [];
let finalR = [];
let score = 100;
let drew = false;
//randomizer and math functions
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
function compSort(arr){
    for (y = 0; y < arr.length; y++){
        for(z = 0; z < arr.length; z++){
            if(arr[y] == arr[z] && y != z){
                console.log('failure of test')
                return false;
            } else{ console.log('success!')}
        };
    };
};
function royalty(arr){
    for (y = 0; y < arr.length; y++){
        if(arr[0] + y != 10 + y){
            console.log('not royal')
                return false;
    } else{
            return console.log('Royal!')
        }
    };
}
//SoundGen
let sfx = {
    win: new Audio('sfx/system01.ogg'),
    lose: new Audio('sfx/badhand.mp3'),
    select: new Audio('sfx/select.mp3')
};
function playSFX(aud){
    aud.pause();
    return aud.play()
};
// Deck Generatiom Code
let deck52 = [];

let DGC = {
suits: ['Spades', 'Hearts', 'Clubs', 'Diamonds'],
value: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
};
//deck generting functions
function deckGen(suit, value){
    this.name = `${value}${suit}`
    this.suit = suit,
    this.value = value,
    this.matchV = [],
    this.matchS = []
};

function makeDeck(){
    for(i = 0; i < DGC.suits.length; i++){
        for(j = 0; j < DGC.value.length; j++){
            deck52.push(new deckGen(DGC.suits[i], DGC.value[j]))
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
    if (hand.length < 5){
        while(n > i){
            hand.push(deck52[0]);
            deck52.shift();
            //console.log(hand, deck52);
            i = hand.length;
     
        };
    } else{
        return console.log('Hand Full!')
    }
    handPop();
    return hand, deck52;
};

function handPop(){
    j = 0;
    while (j < hand.length){
        cardImg = `images/${hand[j].name}.jpg`;
        srcImg = `cardImg${j + 1}`;
        document.getElementById(srcImg).src = cardImg;
        j = j + 1;
    }
}
function delCard(n, m){
    if(!drew){
        document.getElementById(`cardImg${hand.length}`).src = 'images/chosen.jpg';
        hand.splice(n, m);
        handPop();
        console.log(hand);
        playSFX(sfx.select);
    };
};
//Win condition and point functions
function scoreUp(s){
    score += s;
    document.getElementById('score').innerHTML = `$${score}`
    if( s <= 0){
        return printOutcome('scoreboard', 'BUST');
    };
};
function matchingPlus(arr, matched){
    return arr.matchV.push(matched);
};
function matchingSuit(arr, matched){
    return arr.matchS.push(matched);
};
function printOutcome(txt, out){
    return document.getElementById(txt).innerHTML = out;
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
            if(cardSuit == hand[x].suit)
            matchingSuit(arr[i], hand[x]);
        };
        for(x = 0; x < len; x++){
            if(cardValue == hand[x].value)
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
         return printOutcome('scoreboard', 'TWO OF A KIND');
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
         return printOutcome('scoreboard', 'THREE OF A KIND!');
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
         scoreUp(1250);
         return printOutcome('scoreboard', 'FULL HOUSE!');
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
         scoreUp(2500);
         return printOutcome('scoreboard', 'FOUR OF A KIND!');
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
         scoreUp(500);
         return printOutcome('scoreboard', 'FLUSH!');
     } else {
         console.log('conditions not met!')
     };
 };
 function straight(){
     let testy = [];
     let testyStr = [];
     let high = 0;
     let low = 0;
     for(i = 0; i < hand.length; i++){
         testy.push(hand[i].value);
     }
     high = Math.max.apply(null, testy);
     low = Math.min.apply(null, testy);
     for(i = 0; i < hand.length; i++){
        if(high == low + 4){
            testyStr.push(hand[i].value);
            console.log(testyStr.sort());
        }
     };
     testy = [];
     for(i = 0; i < hand.length; i++){
        findS = hand[i].matchS.length;
        if(findS == 5){
            testy.push(findS);
        };
     };
     winStr = compSort(testyStr);
     royal = royalty(testyStr);
     if(winStr){
         console.log('failure or error winStr')
         return false;
     }
     if(testyStr.length == 5 && testy.length == 5 && !royal){
        scoreUp(50000) 
        return printOutcome('scoreboard', 'ROYAL FLUSH!');
     }else if (testyStr.length == 5 && testy.length == 5){
        scoreUp(10000);
        return printOutcome('scoreboard', 'STRAIGHT FLUSH!');
     } else if (testyStr.length == 5 && testy.length != 5){
         scoreUp(2000);
         return printOutcome('scoreboard', 'STRAIGHT');
     } else{
         return false;
     }
     
 }
 function calcHand(){
    straight();
    fullHouse();
    fourofKind();
    flush();
    twoofKind();
    threeofKind();
 };
function winCon(){
    if(drew){
        scoreUp(-20);
        document.getElementById('gameButton').innerHTML = 'Deal'
        checkValSame(hand);
        drew = false;

    }else{
        document.getElementById('gameButton').innerHTML = 'Submit'
        drew = true;
        draw()
    };
}
//startup functions
document.onload = makeDeck();
document.onload = draw();