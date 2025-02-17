export const menuMiddleWear = (store) => (next) => (action) => {
    const currentState = store.getState().menu;
    
    switch (action.type) {
        case 'menu':
            Object.keys(currentState).forEach((key) => {
                if (currentState[key].isOpen) {
                    currentState[key].isOpen = false;
                }
            });
            return next(action); // Don't forget to call next(action)
        default:
            return next(action);
    }
}