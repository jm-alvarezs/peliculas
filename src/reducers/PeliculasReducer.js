import { PELICULAS_RECEIVED } from "../actions/types";

const INITIAL_STATE = {
    peliculas: [],
    pelicula: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PELICULAS_RECEIVED:
            return { ...state, peliculas: action.payload };
        default:
            return { ...state };
    }
};