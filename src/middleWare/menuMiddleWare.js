export const menuMiddleWare = (store) => (next) => (action) => {
    const menuName = action.payload;
    const state = store.getState(); // Rename to state instead of store
    
    if (action.type.startsWith('menu/toggleMenu')) {
        const menuStore = state.menu;
        Object.keys(menuStore).forEach((key) => { // Note: "Objects" -> "Object"
            if (key !== menuName) {
                menuStore[key].isOpen = false;
            }
        });
    }
    // Then let the original action proceed
    return next(action);
}