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
        }
    }
})

export const { toggleMainMenu } = menuSlice.actions;

export default menuSlice.reducer;