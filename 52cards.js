let suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
let value = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
let deck = [];

function deckGen(suit, value){
    this.suit = suit,
    this.value = value
};

function makeDeck(){
    for(i = 0; i < 52; i ++){
        k = Math.floor(i/13);
        q= Math.floor(i/4);
        j = new deckGen(suits[k], value[q])
        deck52.push[j];
    }
    console.log(deck);
};