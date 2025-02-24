export function generateDeck() {
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  const ranks = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  const deck = [];
  for (let suit of suits) {
    for (let [index, rank] of ranks.entries()) {
      const value = index + 2; //adds valuation to each card to use for deciding loser
      deck.push({ suit, rank, value });
    }
  }
  return deck;
}

export function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;
}

export function brekkenShuffle(deck) {
  deck.forEach(card => {
    card['order'] = Math.random();
  });
  deck.sort((a, b) => a.order - b.order);
  return deck;
}

export function addDrawCard(deck) {
  deck.push({ rank: 'draw', suit: 'draw' });
  return deck;
}

export function generateShuffledDeck() {
  const deck = generateDeck();
  const shuffledDeck = shuffleDeck(deck);

  const deckWithDraw = addDrawCard(shuffledDeck);

  return deckWithDraw;
}

