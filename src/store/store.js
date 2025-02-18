import { configureStore } from '@reduxjs/toolkit'
import deckReducer from '../features/deckSlice'
import menuReducer from '../features/menu/menuSlice'
import gameReducer from '../features/gameSlice'
import { menuMiddleWear } from '../middleWear/menuMiddleWear'

export const store = configureStore({
  reducer: {
    deck: deckReducer,
    menu: menuReducer,
    game: gameReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(menuMiddleWear)
})