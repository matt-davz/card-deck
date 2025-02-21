import { newDeck } from '../features/deckSlice/deckSlice';
import { addCardToDrawn, addTiedCard } from '../features/gameSlice/gameSlice';

export const deckMiddleWare = store => next => action => {
  if (action.type === 'deck/removeCardTopCard') {
    const state = store.getState();
    const currentDeck = state.deck.cards;
    const drawnCardsDeck = state.game.drawnCards.cards;
    const drawnCard = state.deck.cards[state.deck.cards.length - 2];

    drawnCardsDeck.forEach((existingCard, i) => {
      if (drawnCard === undefined) {
        return;
      }
      if (existingCard.value === drawnCard.value) {
        console.log('tied card');
        store.dispatch(addTiedCard([existingCard, drawnCard]));
        return;
      }
    });

    if (currentDeck.length === 1) {
      //if last card of the deck, generate new deck
      store.dispatch(newDeck());
    }

    if (drawnCard === undefined) {
      return;
    }
    store.dispatch(addCardToDrawn(drawnCard));
    console.log('drawnCard', drawnCard);
    console.log(state.game.drawnCards);
  }

  if (action.type === 'deck/newDeck') {
    const state = store.getState();
    console.log('new deck');
    console.log(state.deck.cards);
  }

  return next(action);
};
