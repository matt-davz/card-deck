import { closeAllMenus } from "../features/menu/menuSlice";


export const gameMiddleWare = (store) => (next) => (action) => {
    if (action.type === 'game/startGame') {
        store.dispatch(closeAllMenus());

    }
    return next(action);
}