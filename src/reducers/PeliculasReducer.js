import { PELICULAS_RECEIVED, SEARCH_PELICULAS, SET_PELICULA, SET_NOMBRE_PELICULA, SET_DIRECTOR_PELICULA, SET_CATEGORIA_PELICULA, SET_PROTAGONISTAS_PELICULA } from "../actions/types";

const INITIAL_STATE = {
    peliculas: [],
    searchResult: undefined,
    pelicula: {}
}

const searchProtagonistas = (protagonistas, query) => {
    let found = false;
    for(let i = 0; i < protagonistas.length; i++) {
        if(protagonistas[i].toLowerCase().startsWith(query)) found = true;
    }
    return found;
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PELICULAS_RECEIVED:
            return { ...state, peliculas: action.payload };
        case SEARCH_PELICULAS:
            let query = action.payload.toLowerCase();
            if (query === "") return { ...state, searchResult: undefined }
            let peliculas = [...state.peliculas];
            let searchResult = peliculas.filter(pelicula => pelicula.nombre.toLowerCase().startsWith(query) 
                || pelicula.director.toLowerCase().startsWith(query) 
                || pelicula.categoria.toLowerCase().startsWith(query) 
                || searchProtagonistas(pelicula.protagonistas, query)
            );
            return { ...state, searchResult };
        case SET_PELICULA:
            return {...state, pelicula: action.payload };
        case SET_NOMBRE_PELICULA:
            return {...state, pelicula: {...state.pelicula, nombre: action.payload }};
        case SET_DIRECTOR_PELICULA:
            return {...state, pelicula: {...state.pelicula, director: action.payload }};
        case SET_CATEGORIA_PELICULA:
            return {...state, pelicula: {...state.pelicula, categoria: action.payload }};
        case SET_PROTAGONISTAS_PELICULA:
            return {...state, pelicula: {...state.pelicula, protagonistas: action.payload }};
        default:
            return { ...state };
    }
};