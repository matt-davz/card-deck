import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainMenu: {
    isOpen: true,
  },
  normalPlayMenu: {
    isOpen: false,
  },
  resultsMenu: {
    isOpen: false,
  },
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    closeAllMenus: (state, action) => {
      if (!action.payload) {
        // if there is no specified menu calling this action close all menus
        Object.keys(state).forEach(key => {
          state[key].isOpen = false;
        });
      } else {
        Object.keys(state).forEach(key => {
          if (key !== action.payload) {
            state[key].isOpen = false;
          }
        });
      }
    },
    toggleMenu: (state, action) => {
      state[action.payload].isOpen = !state[action.payload].isOpen;
    },
  },
});

export const { toggleMainMenu, toggleMenu, closeAllMenus } = menuSlice.actions;

export default menuSlice.reducer;
