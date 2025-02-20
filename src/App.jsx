import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Deck from './components/Deck'
import deckBackground from './assets/perfect-green-grass-downscaled.png'
import { useDispatch, useSelector } from 'react-redux'
import { newDeck } from './features/deckSlice/deckSlice'
import MainMenu from './components/menu/MainMenu'
import ResultsMenu from './components/menu/ResultsMenu'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${deckBackground});

  width: 100vw;
  height: 100vh;
`

//todo:
// burger menu button


function App() {
  const dispatch = useDispatch()
  const mainMenuIsOpen = useSelector((state) => state.menu.mainMenu.isOpen)
  const resultsMenuIsOpen = useSelector((state) => state.menu.resultsMenu.isOpen)

  const handleShuffle = () => {
    dispatch(newDeck())
  }

  return (
    <Wrapper>
        <button onClick={() => handleShuffle()} >SHUFFLE</button>
        <Deck  />
        {
          mainMenuIsOpen ? 
          <MainMenu />
          :
          null
        }

        {
          resultsMenuIsOpen ? 
          <ResultsMenu />
          :
          null
        }
    </Wrapper>
  )
}

export default App
