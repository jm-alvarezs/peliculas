import {
  PELICULAS_RECEIVED,
  SEARCH_PELICULAS,
  SET_PELICULA,
  SET_NOMBRE_PELICULA,
  SET_DIRECTOR_PELICULA,
  SET_CATEGORIA_PELICULA,
  SET_PROTAGONISTAS_PELICULA,
  SET_SEARCH_TYPE,
  SET_DURACION_PELICULA
} from "../actions/types";

const INITIAL_STATE = {
  peliculas: [],
  searchResult: undefined,
  pelicula: undefined
};

const searchProtagonistas = (protagonistas, query) => {
  protagonistas = protagonistas.split(", ");
  let found = false;
  for (let i = 0; i < protagonistas.length; i++) {
    let protagonista = protagonistas[i].toLowerCase().replace(/^\s+/g, "");
    if (protagonista.startsWith(query)) found = true;
  }
  return found;
};

const searchPeliculas = (peliculas, type, query) => {
  if (type === "Todo")
    return peliculas.filter(
      pelicula =>
        pelicula.nombre.toLowerCase().startsWith(query) ||
        pelicula.director.toLowerCase().startsWith(query) ||
        pelicula.categoria.toLowerCase().startsWith(query) ||
        searchProtagonistas(pelicula.protagonistas, query)
    );
  if (type === "Nombre")
    return peliculas.filter(pelicula =>
      pelicula.nombre.toLowerCase().startsWith(query)
    );
  if (type === "Director")
    return peliculas.filter(pelicula =>
      pelicula.director.toLowerCase().startsWith(query)
    );
  if (type === "Categoria")
    return peliculas.filter(pelicula =>
      pelicula.categoria.toLowerCase().startsWith(query)
    );
  if (type === "Protagonistas")
    return peliculas.filter(pelicula =>
      searchProtagonistas(pelicula.protagonistas, query)
    );
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PELICULAS_RECEIVED:
      return { ...state, peliculas: action.payload };
    case SET_SEARCH_TYPE:
      return { ...state, searchType: action.payload };
    case SEARCH_PELICULAS:
      let query = action.payload.toLowerCase();
      if (query === "") return { ...state, searchResult: undefined };
      let peliculas = [...state.peliculas];
      let type = state.searchType;
      let searchResult = searchPeliculas(peliculas, type, query);
      return { ...state, searchResult };
    case SET_PELICULA:
      return { ...state, pelicula: action.payload };
    case SET_NOMBRE_PELICULA:
      return {
        ...state,
        pelicula: { ...state.pelicula, nombre: action.payload }
      };
    case SET_DIRECTOR_PELICULA:
      return {
        ...state,
        pelicula: { ...state.pelicula, director: action.payload }
      };
    case SET_CATEGORIA_PELICULA:
      return {
        ...state,
        pelicula: { ...state.pelicula, categoria: action.payload }
      };
    case SET_PROTAGONISTAS_PELICULA:
      return {
        ...state,
        pelicula: { ...state.pelicula, protagonistas: action.payload }
      };
    case SET_DURACION_PELICULA:
      return {
        ...state,
        pelicula: { ...state.pelicula, duracion: action.payload }
      };
    default:
      return { ...state };
  }
};
