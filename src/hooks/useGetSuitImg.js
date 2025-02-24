import { useSelector } from 'react-redux';
import hearts from '../assets/hearts.svg';
import diamonds from '../assets/diamonds.svg';
import clubs from '../assets/clubs.svg';
import spades from '../assets/spades.svg';

const SUIT_MAP = {
  hearts,
  diamonds,
  clubs,
  spades,
};


export const useGetSuitImg = ( suit ) => {
  let color = 'black';

  if (suit === 'hearts' || suit === 'diamonds') {
    color = 'red';
  }

  const suitImage = SUIT_MAP[suit];

  return {
    color,
    suitImage
  };
};
