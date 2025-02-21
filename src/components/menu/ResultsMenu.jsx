import React, { use, useEffect } from 'react'
import styled from 'styled-components'
import Modal from '../modal/Modal'
import Card from '../Card'

import hearts from '../../assets/hearts.svg'
import diamonds from '../../assets/diamonds.svg'
import clubs from '../../assets/clubs.svg'
import spades from '../../assets/spades.svg'

import { useSelector, useDispatch } from 'react-redux'

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

  useEffect(() => {console.log('lowestCard',lowestCard)}, [])

  return (
    <Modal>
      <Wrapper>
        <div className="card-container">
          <h1>Lowest Card</h1>
          <h1 className='rank'>{lowestCard.rank}</h1>
          <img src={SUIT_MAP[lowestCard.suit]} alt="" />
        </div>
        <form id='quickPlayCreds'>
          <input type="text" placeholder="Enter Name" />
          <div className="submit-container">
            <button type="button">Continue Game</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </Wrapper>
    </Modal>
  )
}

export default ResultsMenu