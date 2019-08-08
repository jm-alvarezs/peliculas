import { PELICULAS_RECEIVED, SEARCH_PELICULAS, SET_NOMBRE_PELICULA, SET_DIRECTOR_PELICULA, SET_CATEGORIA_PELICULA, SET_PROTAGONISTAS_PELICULA, SET_PELICULA, SET_MODAL } from "./types";
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

export const postPelicula = (pelicula, callback) => dispatch => {
    axios.post(BASE_URL + "/peliculas")
        .then(() => {
            if (callback) callback();
        })
        .catch(error => console.log(error));
};

export const updatePelicula = (pelicula, callback) => dispatch => {
    axios.put(BASE_URL + "/peliculas")
        .then(() => {
            if (callback) callback()
        })
        .catch(error => console.log(error));
};

export const clearPelicula = () => dispatch => {
    dispatch({ type: SET_PELICULA, payload: undefined });
};

export const showModal = () => dispatch => {
    dispatch({ type: SET_MODAL, payload: true });
};

export const hideModal = () => dispatch => {
    dispatch({ type: SET_MODAL, payload: false });
};

export const editarPelicula = pelicula => dispatch => {
    dispatch({ type: SET_PELICULA, payload: pelicula });
    dispatch({ type: SET_MODAL, payload: true });
};

export const setNombrePelicula = nombre => dispatch => {
    dispatch({ type: SET_NOMBRE_PELICULA, payload: nombre });
};

export const setDirectorPelicula = director => dispatch => {
    dispatch({ type: SET_DIRECTOR_PELICULA, payload: director });
};

export const setCategoriaPelicula = categoria => dispatch => {
    dispatch({ type: SET_CATEGORIA_PELICULA, payload: categoria });
};

export const setProtagonistas = protagonistas => dispatch => {
    dispatch({ type: SET_PROTAGONISTAS_PELICULA, payload: protagonistas });
};