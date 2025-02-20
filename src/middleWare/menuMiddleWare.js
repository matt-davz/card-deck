export const menuMiddleWare = (store) => (next) => (action) => {
    const menuName = action.payload;
    const state = store.getState(); // Rename to state instead of store
    
    return next(action);
}