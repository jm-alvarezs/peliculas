import { combineReducers } from 'redux';
import PeliculasReducer from './PeliculasReducer';
import ModalReducer from "./ModalReducer";

export default combineReducers({
    peliculas: PeliculasReducer,
    modal: ModalReducer
});