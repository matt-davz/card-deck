import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import { generateShuffledDeck, addDrawCard } from '../utils/cardlogic'
import { useSelector, useDispatch } from 'react-redux'
import { removeCardTopCard } from '../features/deckSlice'

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


function Deck() {
    const deck = useSelector((state) => state.deck.cards)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(removeCardTopCard())
    }
  return (
   <Wrapper onClick={() => handleClick()}>

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