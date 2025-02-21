import React from 'react'
import styled from 'styled-components'

import { useSelector,useDispatch } from 'react-redux'

const Wrapper = styled.button`

`

function EndButton() {
  const dispatch = useDispatch()
  const isFlippOff = useSelector((state) => state.game.isFlippOff)    
  const content = 'END GAME'

  if(isFlippOff.isActive){
    content = 'HEADS UP'
  } else if(isFlippOff.type === 'flippOff'){
    content = 'FLIPP OFF'
  }
  
  return (
    <Wrapper>{content}</Wrapper>
  )
}

export default EndButton