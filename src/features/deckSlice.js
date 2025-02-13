import { createSlice } from "@reduxjs/toolkit";
import { generateShuffledDeck } from "../utils/cardlogic";

const initialState = {cards: generateShuffledDeck()}; ;

export const deckSlice = createSlice({
    name: "deck",
    initialState,
    reducers: {
        removeCardTopCard: (state, action) => {
        state.cards.pop();
        },
    },
});

export const { removeCardTopCard } = deckSlice.actions;

export default deckSlice.reducer;