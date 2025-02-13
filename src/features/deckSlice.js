import { createSlice } from "@reduxjs/toolkit";
import { generateShuffledDeck } from "../utils/cardlogic";

const initialState = {cards: generateShuffledDeck()}; ;

export const deckSlice = createSlice({
    name: "deck",
    initialState,
    reducers: {
        removeCardTopCard: (state, action) => {

        if (state.cards.length === 1) {
            state.cards = generateShuffledDeck();
            return;
        }

        state.cards.pop();
        },
        newDeck: (state, action) => {
            state.cards = generateShuffledDeck();
        }
    },
});

export const { removeCardTopCard, newDeck } = deckSlice.actions;

export default deckSlice.reducer;