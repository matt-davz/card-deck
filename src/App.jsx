import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Deck from './components/Deck';
import deckBackground from './assets/perfect-green-grass-downscaled.png';
import { useDispatch, useSelector } from 'react-redux';
import { newDeck } from './features/deckSlice/deckSlice';
import { endGame } from './features/gameSlice/gameSlice';
import MainMenu from './components/menu/MainMenu';
import ResultsMenu from './components/menu/ResultsMenu';
import EndButton from './components/EndButton';
import { useGameType } from './hooks/useGameType';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${deckBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  width: 100vw;
  height: 100vh;
`;

function App() {
  const dispatch = useDispatch();
  const mainMenuIsOpen = useSelector(state => state.menu.mainMenu.isOpen);
  const resultsMenuIsOpen = useSelector(state => state.menu.resultsMenu.isOpen);
  const isGameActive = useSelector(state => state.game.start);
  const {displayGameType} = useGameType();

  useEffect(() => {
    console.log('display gmae tpye', displayGameType);
  }, [displayGameType]);

  return (
    <Wrapper>
      <h1>{displayGameType}</h1>
      <button onClick={() => dispatch(newDeck())}>SHUFFLE</button>
      <Deck />
      {mainMenuIsOpen ? <MainMenu /> : null}
      {resultsMenuIsOpen ? <ResultsMenu /> : null}
      {isGameActive ? (
        <EndButton />
      ) : null}
    </Wrapper>
  );
}

export default App;