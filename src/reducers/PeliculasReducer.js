const INITIAL_STATE = {
    peliculas: [],
    categorias: [],
    directores: [],
    protagornistas: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};