import { closeAllMenus } from "../features/menu/menuSlice";
import { toggleMenu } from "../features/menu/menuSlice";

export const gameMiddleWare = (store) => (next) => (action) => {
    if (action.type === 'game/startGame') {
        store.dispatch(closeAllMenus());

    }

    if(action.type === 'game/endGame') {
        store.dispatch(toggleMenu('resultsMenu'));
    }

    if(action.type === 'game/continueGame'){
        store.dispatch(closeAllMenus())
    }

    if(action.type === 'startFlipOff'){

    }
    return next(action);
}