import React, { use, useEffect } from 'react'
import styled from 'styled-components'
import Modal from '../modal/Modal'
import Card from '../Card'

import { useSelector, useDispatch } from 'react-redux'

const Wrapper = styled.div`

  form{
    margin: 0;
    padding: 0;
    border: solid 1px red;
    background: none;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

`



function ResultsMenu() {
  const lowestCard = useSelector((state) => state.game.drawnCards.cards[0])

  useEffect(() => {console.log(lowestCard)}, [])

  return (
    <Modal>
      <Wrapper>
        <h1>End Of Game</h1>
        <form action="submit">
          <main>
            <Card />
            <div className='inputContainer'>

            </div>
          </main>
          <div className='Resultfooter'>
            <button>Continue Game</button>
            <button>Submit Results</button>
          </div>
        </form>
      </Wrapper>
    </Modal>
  )
}

export default ResultsMenu