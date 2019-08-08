import React, { Component } from "react";
import PeliculaCard from '../components/PeliculaCard';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import { getPeliculas, searchPelicula } from "../actions/peliculasActions";
import { connect } from "react-redux";

class Peliculas extends Component {

    componentWillMount() {
        this.props.getPeliculas();
    }

    renderPeliculas() {
        if (this.props.peliculas) {
            if (this.props.peliculas.length > 0) {
                let peliculas = [];
                if(this.props.searchResult) {
                    peliculas = this.props.searchResult;
                    if(peliculas.length === 0) return <p>No hay peliculas para esa búsqueda</p>;
                } else {
                    peliculas = this.props.peliculas;
                }
                return peliculas.map(pelicula => <PeliculaCard pelicula={pelicula} key={pelicula.id} />);
            }                
            return <p>No hay peliculas</p>;
        }
        return <></>;
    }

    render() {
        return (
            <Container>
                <h1>Peliculas</h1>
                <Form.Control type="text" className="border-0 pl-0 pr-0" placeholder="Buscar por Nombre de Pelicula, Director, Categoria o Protagonistas..." onChange={(e) => this.props.searchPelicula(e.target.value)} />
                <hr />
                {this.renderPeliculas()}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    peliculas: state.peliculas.peliculas,
    searchResult: state.peliculas.searchResult
})

export default connect(mapStateToProps, { getPeliculas, searchPelicula })(Peliculas);