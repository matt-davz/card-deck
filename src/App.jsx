import { useState, useEffect } from 'react'
import './App.css'
import styled from 'styled-components'
import Deck from './components/Deck'
import deckBackground from './assets/perfect-green-grass-downscaled.png'
import { generateShuffledDeck } from './utils/cardlogic'

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
  const [deck, setDeck] = useState(generateShuffledDeck())
  const [shuffle, setShuffle] = useState(false)

  useEffect(() => {
          if(deck.length === 0){
              setDeck(generateShuffledDeck())
          }
          console.log(deck)
  },[deck])

  const handleClick = () => {
    console.log('clicked')
    setDeck(prevDeck => [...prevDeck.slice(0, -1)]);
}

  return (
    <Wrapper>
        <button>SHUFFLE</button>
        <Deck deck={deck} onClick={() => handleClick()} />
    </Wrapper>
  )
}

export default App
