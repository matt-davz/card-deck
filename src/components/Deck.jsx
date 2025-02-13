import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import { generateShuffledDeck, addDrawCard } from '../utils/cardlogic'


const Wrapper = styled.div`
    max-width: 240px;  
    max-height: 336px;
    aspect-ratio: 1.5/1;

    width: 100%;
    height: 100%;

    position : relative;

    display: flex;
    justify-content: center;
    align-items: center;

`


function Deck({deck}) {
    const [deckState, setDeckState] = useState(deck)

    useEffect(() => {
        setDeckState(deck)
    }, [deck])


  return (
   <Wrapper>

    {deck.map((e,i) => {
        const deckLength = deck.length;
        console.log(deckLength)
        if(i === deckLength - 1){
            console.log('top card')
            return(
                <Card key={i} suite={e.suit} rank={e.rank} />
            )
        }


        return(
            <Card key={i} suite={e.suites} rank={e.rank} />
        )
    })}

   </Wrapper>
  )
}

export default Deck