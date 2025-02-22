import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { endGame } from '../features/gameSlice/gameSlice';

const Wrapper = styled.button``;

function EndButton() {
  const dispatch = useDispatch();
  const tiedGame = useSelector(state => state.game.tiedGame);
  let content = 'END GAME';

  if (tiedGame.type === 'headsUp') {
    content = 'HEADS UP';
  } else if (tiedGame.type === 'flippOff') {
    content = 'FLIPP OFF';
  }

  return <Wrapper onClick={() => dispatch(endGame())}>{content}</Wrapper>;
} 

export default EndButton;
