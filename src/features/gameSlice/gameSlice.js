import { createSlice } from '@reduxjs/toolkit';

// Unified game result structure
const initialState = {
  deck: [],
  start: false, // Deck of cards used
  gameId: '', // Unique identifier for each game
  gameType: '', // Type of game played
  timestamp: '', // When the game occurred
  amount: 0, // Amount paid
  eventName: '', // Name/title of the event
  loser: {
    card: {},
    playerName: '',
  }, // Person who lost/paid
  players: [], // Empty for quick games, filled for normal games
  drawnCards: {
    cards: [],
    tiedCards: [],
  },
  tiedGame: {
    isActive: false,
    type: '',
    games: [],
  },
  clientId: '', // Local storage ID we discussed
  synced: false, // Track if this has been synced to backend
};

const gameStartHelper = (state, action) => {
  const newId = crypto.randomUUID();
  const dateNow = new Date();

  state.start = true;

  state.gameId = id;

  state.timestamp = dateNow.now();
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addDeck: (state, action) => {
      state.game.deck.push(action.payload);
    },
    addCardToDrawn: (state, action) => {
      state.drawnCards.cards.push(action.payload);
      state.drawnCards.cards.sort((a, b) => a.value - b.value);
    },
    addPlayer: (state, action) => {
      state.game.players.push(action.payload);
    },
    setLoserName: (state, action) => {
      state.game.loser.playerName = action.payload;
    },
    resetGame: (state, action) => {
      state.game = initialState;
    },
    startGame: (state, action) => {
      const newId = crypto.randomUUID();
      state.start = true;
      state.gameId = newId;
      state.timestamp = Date.now();

      if (action.payload === 'normal') {
        state.gameType = 'normal';
      } else {
        state.gameType = 'quick';
      }
    },
    endGame: (state, action) => {
      state.start = false;

      if (state.flippOff.isActive) {
      }
    },
    continueGame: (state, action) => {
      state.start = true;
    },
    startTiedGame: (state, action) => {
      state.flippOff.isActive = true;
    },
    addTiedCard: (state, action) => {
      // handle adding tied card to the state
      const drawnCard = action.payload.drawnCard;
      const drawnCardDeck = state.drawnCards.cards;
      const tiedDeck = state.drawnCards.tiedCards;
      let matchedCardIndex;

      if (drawnCardDeck.length < 1) return; // if drawnDeck is empty do nothing

      const rowIndex = tiedDeck.findIndex(
        (
          cardArray // finds the index that contacts the array of matching cards
        ) => cardArray.some(card => card.rank === drawnCard.rank)
      );

      if (rowIndex === -1) {
        // if array of currently matching cards does not exsist
        tiedDeck.push([drawnCard, drawnCardDeck[matchingIndex]]); // creates new array with the same rank
      } else {
        tiedDeck[rowIndex].push(drawnCard); // push to exsisting nested array with same
      }

      //handles setting tiedgame state
      state.tiedGame.type = 'headsUp';

      if (state.drawnCards.tiedCards.length > 2) {
        // If there are more than 2 tied card pairs
        state.tiedGame.type = 'flippOff';
      }
    },
    submitResults: (state, action) => {
      state.synced = true;
    },
  },
});

export const {
  continueGame,
  addTiedCard,
  startGame,
  addDeck,
  addCardToDrawn,
  addPlayer,
  setLoserName,
  resetGame,
  normalGame,
  quickGame,
  endGame,
} = gameSlice.actions;

export default gameSlice.reducer;
