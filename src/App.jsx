import { useState, useEffect } from 'react'
import './App.css'
import styled from 'styled-components'
import Deck from './components/Deck'
import deckBackground from './assets/perfect-green-grass-downscaled.png'
import { useDispatch } from 'react-redux'
import { newDeck } from './features/deckSlice'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${deckBackground});

  width: 100vw;
  height: 100vh;
`


function App() {
  const dispatch = useDispatch()

  const handleShuffle = () => {
    console.log('shuffle')
    dispatch(newDeck())
  }

  return (
    <Wrapper>
        <button onClick={() => handleShuffle()} >SHUFFLE</button>
        <Deck  />
    </Wrapper>
  )
}

export default App
