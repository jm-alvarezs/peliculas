import React, { Component } from "react";
import PeliculaCard from '../components/PeliculaCard';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";

class Peliculas extends Component {

    renderPeliculas() {
        if (this.props.peliculas) {
            if (this.props.peliculas.length > 0)
                return this.props.peliculas.map(pelicula => <PeliculaCard pelicula={pelicula} key={pelicula.id} />);
            return <p>No hay peliculas</p>;
        }
        return <></>;
    }

    render() {
        return (
            <Container>
                <h1>Peliculas</h1>
                <Form.Control type="text" className="border-0 pl-0 pr-0" placeholder="Buscar por Nombre de Pelicula, Director, Categoria o Protagonistas..." />
                <hr />
                {this.renderPeliculas()}
            </Container>
        );
    }
}

export default Peliculas;