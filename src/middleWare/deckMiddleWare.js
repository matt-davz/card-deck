import { newDeck } from '../features/deckSlice/deckSlice';
import { addCardToDrawn, addTiedCard } from '../features/gameSlice/gameSlice';

export const deckMiddleWare = store => next => action => {
  if (action.type === 'deck/removeCardTopCard') {
    const state = store.getState();
    const currentDeck = state.deck.cards;
    const drawnCardDeck = state.game.drawnCards.cards;
    const drawnCard = state.deck.cards[state.deck.cards.length - 2]; // selects the card that is shown since each top card removal is  

    let matchingIndex;
    if (
      // checks to see if the drawn card exsists in current drawnCardsDeck
      drawnCardDeck.some((card, index) => {
        if (card.rank === drawnCard.rank) {
          matchingIndex = index;
          return true;
        }
        return false;
      })
    ){
        const matchedCard = drawnCardDeck[matchingIndex];
        
        store.dispatch(addTiedCard({drawnCard,matchedCard}));
    }
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
