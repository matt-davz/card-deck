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
    startGame: (state, { gameType }) => {
      const newId = crypto.randomUUID();
      state.start = true;
      state.gameId = newId;
      state.timestamp = Date.now();

      if (gameType === 'normal') {
        state.gameType = 'normal';
      } else {
        state.gameType = 'quick';
      }
    },
    endGame: (state, action) => {
      state.start = false;
    },
    continueGame: (state, action) => {
      state.start = true;
    },
    startHeadsUp: (state, action) => {
      state.flippOff.isActive = true;
      state.flippOff.type = 'headsUp';
    },
    startFlipOff: (state, action) => {},
    addTiedCard: (state, action) => {
      action.payload.forEach(card => {
        state.drawnCards.tiedCards.push(card);
      });
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
