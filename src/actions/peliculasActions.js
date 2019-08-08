import { PELICULAS_RECEIVED, SEARCH_PELICULAS } from "./types";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

export const getPeliculas = () => dispatch => {
    axios.get(BASE_URL + "/peliculas")
        .then(res => dispatch({ type: PELICULAS_RECEIVED, payload: res.data }))
        .catch(error => console.log(error));
};

export const searchPelicula = query => dispatch => {
    dispatch({ type: SEARCH_PELICULAS, payload: query });
};