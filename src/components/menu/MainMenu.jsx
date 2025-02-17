import React from 'react'
import styled from 'styled-components'

import Modal from '../modal/Modal'
import { useDispatch } from 'react-redux'
import { toggleMainMenu } from '../../features/menuSlice'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    button{
        display: block;
    }
`


function MainMenu() {
    const dispatch = useDispatch()

    const handleCards = () => {
        dispatch(toggleMainMenu())
        console.log('cards')
    }
    return (
    <Modal>
        <Wrapper>
            <h1>FLIBBIT</h1>
            <main>
                <button>Normal Game</button>
                <button>Quick Game</button>
                <button onClick={() => handleCards() }>Cards</button>
            </main>
        </Wrapper>
    </Modal>
  )
}

export default MainMenu