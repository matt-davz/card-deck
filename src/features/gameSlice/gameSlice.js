import { createSlice } from "@reduxjs/toolkit";

// Unified game result structure
const initialState = {
    deck: [],         // Deck of cards used
    gameId: '',         // Unique identifier for each game
    gameType: '',  // Type of game played
    timestamp: '',        // When the game occurred
    amount: 0,         // Amount paid
    eventName: '',      // Name/title of the event
    loser: '',         // Person who lost/paid
    players: [],      // Empty for quick games, filled for normal games
    drawnCards: [],
    clientId: '',       // Local storage ID we discussed
    synced: false        // Track if this has been synced to backend
  }

const gameStartHelper = (state,action) => {
    const newId = crypto.randomUUID();
    const dateNow = new Date();

    state.game.gameId = id;            

    state.game.timestamp = dateNow.now()
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        addDeck: (state, action) => {
            state.game.deck.push(action.payload)
        },
        addCardToDrawn: (state, action) => {
            state.drawnCards.push(action.payload)
        },
        addPlayer: (state, action) => {
            state.game.players.push(action.payload)
        },
        resetGame: (state, action) => {
            state.game = initialState
        },
        noralGame: (state, action) => {
            gameStartHelper(state,action)
            state.game.gameType = 'normal'
        },
        quickGame: (state, action) => {
            gameStartHelper(state,action)
            state.game.gameType = 'quick'
        },
    }
});


export const { addDeck, addCardToDrawn, addPlayer, resetGame, normalGame, quickGame } = gameSlice.actions;

export default gameSlice.reducer;