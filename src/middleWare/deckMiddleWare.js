import { addCardToDrawn } from "../features/gameSlice/gameSlice";

export const deckMiddleWare = (store) => (next) => (action) => {
    

    if(action.type === 'deck/removeCardTopCard') {
        const state = store.getState();
        const drawnCard = state.deck.cards[state.deck.cards.length - 1];
        const nextCard = state.deck.cards[state.deck.cards.length - 2];
        store.dispatch(addCardToDrawn(nextCard));
        console.log('drawnCard', nextCard);
        console.log(state.game.drawnCards);
    }

    if(action.type === 'deck/newDeck') {
        const state = store.getState();
        console.log('new deck');
        console.log(state.deck.cards);
    }

    return next(action)
}