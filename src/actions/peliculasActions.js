import {
  PELICULAS_RECEIVED,
  SEARCH_PELICULAS,
  SET_NOMBRE_PELICULA,
  SET_DIRECTOR_PELICULA,
  SET_CATEGORIA_PELICULA,
  SET_PROTAGONISTAS_PELICULA,
  SET_PELICULA,
  SET_SEARCH_TYPE,
  MODAL_COMPONENT,
  SET_DURACION_PELICULA,
  HIDE_MODAL
} from "./types";
import axios from "axios";

const BASE_URL = "http://localhost:4000";

const validarPelicula = pelicula => {
  let error = "";
  if(pelicula.nombre === "") error = "Nombre";
  else if(pelicula.director === "") error = "Director";
  else if(pelicula.protagonistas === "") error = "Protagonistas";
  else if(pelicula.categoria === "") error = "Categoria";
  else if(pelicula.duracion === "" || isNaN(pelicula.duracion)) error = "Duración";
  return error;
}

const displayError = error => {
  alert(`${error} de pelicula no válido`);
}

export const getPeliculas = () => dispatch => {
  axios
    .get(BASE_URL + "/peliculas")
    .then(res => {
      let peliculas = res.data;
      peliculas.forEach(pelicula => {
        pelicula.protagonistas = pelicula.protagonistas.join(", ")
      });
      dispatch({ type: PELICULAS_RECEIVED, payload: peliculas })
    })
    .catch(error => console.log(error));
};

export const setSearchType = type => dispatch => {
  dispatch({ type: SET_SEARCH_TYPE, payload: type });
}

export const searchPelicula = query => dispatch => {
  dispatch({ type: SEARCH_PELICULAS, payload: query });
};

export const postPelicula = (pelicula, callback) => dispatch => {
    delete pelicula.id;
    let error = validarPelicula(pelicula);
    if(error !== "") {
      displayError(error);
      return;
    }
    let protagonistas = pelicula.protagonistas.split(",");
    pelicula.protagonistas = protagonistas;
    axios
    .post(BASE_URL + "/peliculas", { ...pelicula })
    .then(() => {
      dispatch({ type: HIDE_MODAL });
      if (callback) callback();
    })
    .catch(error => console.log(error));
};

export const updatePelicula = (pelicula, callback) => dispatch => {  
  let error = validarPelicula(pelicula);
  if(error !== "") {
    displayError(error);
    return;
  }
  let protagonistas = pelicula.protagonistas.split(",");
  pelicula.protagonistas = protagonistas;
  axios
    .put(BASE_URL + "/peliculas/"+pelicula.id, {
      nombre: pelicula.nombre,
      director: pelicula.director,
      categoria: pelicula.categoria,
      protagonistas: pelicula.protagonistas,
      duracion: pelicula.duracion
    })
    .then(() => {
      dispatch({ type: HIDE_MODAL });
      if (callback) callback();
    })
    .catch(error => console.log(error));
};

export const deletePelicula = (id, callback) => dispatch => {
  axios.delete(BASE_URL+"/peliculas/"+id)
  .then(() => {
    if(callback) callback();
  })
  .catch(error => console.log(error));
}

export const clearPelicula = () => dispatch => {
  dispatch({ type: SET_PELICULA, payload: undefined });
};

export const editarPelicula = (pelicula, onConfirm) => dispatch => {
  dispatch({ type: SET_PELICULA, payload: pelicula });
  dispatch({ type: MODAL_COMPONENT, payload: { onConfirm, component: "form" }})
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

export const setDuracionPelicula = duracion => dispatch => {
  dispatch({ type: SET_DURACION_PELICULA, payload: duracion })
};
