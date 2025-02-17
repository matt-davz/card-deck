import { configureStore } from '@reduxjs/toolkit'
import deckReducer from '../features/deckSlice'
import menuReducer from '../features/menuSlice'
import gameReducer from '../features/gameSlice'

export const store = configureStore({
  reducer: {
    deck: deckReducer,
    menu: menuReducer,
  },
})