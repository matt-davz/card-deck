import { configureStore } from '@reduxjs/toolkit'
import deckReducer from '../features/deckSlice'

export const store = configureStore({
  reducer: {
    deck: deckReducer,
  },
})