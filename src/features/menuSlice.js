import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mainMenu: {
        isOpen: true,
    },
}

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleMainMenu: (state, action) => {
            state.mainMenu.isOpen = !state.mainMenu.isOpen;
        },
        toggleNormalPlay: (state, action) => {},
        toggleQuickPlay: (state, action) => {},
    }
})

export const { toggleMainMenu } = menuSlice.actions;

export default menuSlice.reducer;