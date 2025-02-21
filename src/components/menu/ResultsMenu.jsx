import React, { use, useEffect } from 'react'
import styled from 'styled-components'
import Modal from '../modal/Modal'
import Card from '../Card'

import hearts from '../../assets/hearts.svg'
import diamonds from '../../assets/diamonds.svg'
import clubs from '../../assets/clubs.svg'
import spades from '../../assets/spades.svg'

import { useSelector, useDispatch } from 'react-redux'
import { closeAllMenus } from '../../features/menu/menuSlice'
import {continueGame} from '../../features/gameSlice/gameSlice'

const Wrapper = styled.div`
  height:100%;
  width: 100%;

  h1:first-of-type{
    text-align: center;
  }

  form{
    margin: 0;
    padding: 0;
    
    background: none;

    display: flex;
    flex-direction: column;
    
    align-items: center;
    margin-top: 1rem;
  }

  .card-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-container img{
    width: 100px;
    height: 100px;
  }

  .rank{
    margin-top:0;
    color: ${props => props.color === 'red' ? "red" : "black"};
  }

`

const SUIT_MAP = {
  hearts,
  diamonds,
  clubs,
  spades
}

function ResultsMenu() {
  const lowestCard = useSelector((state) => state.game.drawnCards.cards[0])
  const dispatch = useDispatch();

  let rankColor = 'black';

    if(lowestCard.suit === 'hearts' || lowestCard.suit === 'diamonds'){
        rankColor = 'red'
  }

  return (
    <Modal>
      <Wrapper color={rankColor}>
        <div className="card-container">
          <h1>Lowest Card</h1>
          <h1 className='rank'>{lowestCard.rank}</h1>
          <img src={SUIT_MAP[lowestCard.suit]} alt="" />
        </div>
        <form id='quickPlayCreds'>
          <input type="text" placeholder="Enter Name" />
          <input type="text" placeholder="Amount" />
          <input type="text" placeholder="Event" />
          <div className="submit-container">
            <button onClick={() => dispatch(continueGame())} type="button">Continue Game</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Wrapper>
    </Modal>
  )
}

export default ResultsMenu