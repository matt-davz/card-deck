import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';

const Wrapper = styled.button``;

function EndButton() {
  const dispatch = useDispatch();
  const isTiedGame = useSelector(state => state.game.isTiedGame);
  const content = 'END GAME';

  if (isTiedGame.isActive && isTiedGame.type === 'headsUp') {
    content = 'HEADS UP';
  } else if (isTiedGame.isActive && isTiedGame.type === 'flippOff') {
    content = 'FLIPP OFF';
  }

  const handleClick = () => {};

  return <Wrapper onClick={() => handleClick()}>{content}</Wrapper>;
}

export default EndButton;
