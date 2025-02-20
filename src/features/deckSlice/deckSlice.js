import { createSlice } from "@reduxjs/toolkit";
import { generateShuffledDeck } from "../../utils/cardlogic";
import { addCardToDrawn } from "../gameSlice/gameSlice";

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

        const drawnCard = state.cards[state.cards.length - 1]; //stores the drawn card into const
        
        state.cards.pop(); //stores the drawn card into const and removes it from the deck

        },
        newDeck: (state, action) => {
            const shuffledDeck = generateShuffledDeck();
            state.cards = shuffledDeck;
            
        }
    },
});

export const { removeCardTopCard, newDeck } = deckSlice.actions;

export default deckSlice.reducer;