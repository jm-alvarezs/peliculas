import { combineReducers } from 'redux';
import PeliculasReducer from './PeliculasReducer';

export default combineReducers({
    peliculas: PeliculasReducer
});