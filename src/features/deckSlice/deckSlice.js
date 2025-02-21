import { createSlice } from "@reduxjs/toolkit";
import { generateShuffledDeck } from "../../utils/cardlogic";
import { addCardToDrawn } from "../gameSlice/gameSlice";

const initialState = {
    cards: generateShuffledDeck()
}; 

export const deckSlice = createSlice({
    name: "deck",
    initialState,
    reducers: {
        removeCardTopCard: (state, action) => {
            
            state.cards.pop(); 
        },
        newDeck: (state, action) => {
            const shuffledDeck = generateShuffledDeck();
            state.cards = shuffledDeck;

        }
    },
});

export const { removeCardTopCard, newDeck } = deckSlice.actions;

export default deckSlice.reducer;