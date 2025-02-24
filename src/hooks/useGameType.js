import { useSelector } from 'react-redux';

const GAME_TYPE_MAPPING = {
  headsUp: 'HEADS UP',
  flippOff: 'FLIPP OFF',
  normal: 'NORMAL GAME',
  quick: 'QUICK GAME',
  default: 'FLIBBIT'
};

export const useGameType = () => { 
  const gameType = useSelector(state => state.game.gameType);
  const tiedType = useSelector(state => state.game.tiedGame.type);
  const isTiedGameActive = useSelector(state => state.game.tiedGame.isActive);

  const getDisplayGameType = () => {
    if (isTiedGameActive) {
      return GAME_TYPE_MAPPING[tiedType] || GAME_TYPE_MAPPING.default;
    }
    return GAME_TYPE_MAPPING[gameType] || GAME_TYPE_MAPPING.default;
  };

  return {
    displayGameType: getDisplayGameType(),
    gameType,
    tiedType,
    isTiedGameActive,
    GAME_TYPE_MAPPING
  };
};
