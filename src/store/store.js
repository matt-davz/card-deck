import { configureStore } from '@reduxjs/toolkit'
import deckReducer from '../features/deckSlice/deckSlice'
import menuReducer from '../features/menu/menuSlice'
import gameReducer from '../features/gameSlice/gameSlice'
import { menuMiddleWare } from '../middleWare/menuMiddleWare'
import { deckMiddleWare } from '../middleWare/deckMiddleWare'
import { gameMiddleWare } from '../middleWare/gameMiddleWare'

export const store = configureStore({
  reducer: {
    deck: deckReducer,
    menu: menuReducer,
    game: gameReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(menuMiddleWare, deckMiddleWare, gameMiddleWare)
})