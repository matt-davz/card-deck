import React from 'react'
import styled from 'styled-components'

import Modal from '../modal/Modal'
import { useDispatch } from 'react-redux'
import { toggleMenu, closeAllMenus } from '../../features/menu/menuSlice'
import { startGame } from '../../features/gameSlice/gameSlice'

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


    return (
    <Modal>
        <Wrapper>
            <h1>FLIBBIT</h1>
            <main>
                <button onClick={() => dispatch(startGame('normal'))} >Normal Game</button>
                <button onClick={() => dispatch(startGame('quick'))}>Quick Game</button>
                <button onClick={() => dispatch(closeAllMenus()) }>Cards</button>
                <button>Settings</button>
            </main>
        </Wrapper>
    </Modal>
  )
}

export default MainMenu