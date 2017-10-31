const funcHolder = {};

const observerMenu = {
    addObserver: (name, func) => {
        funcHolder[name] = func;
    },
    executeObserver: (name, param) => {
        funcHolder[name](param);
    }
}

export default observerMenu;