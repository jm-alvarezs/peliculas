import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { setNombrePelicula, setDirectorPelicula, setCategoriaPelicula, setProtagonistas } from "../actions/peliculasActions";
import { connect } from "react-redux";

class PeliculaForm extends Component {
    render() {
        return (
            <Container fluid={true} className="pt-3 pb-4">
                <h2 className="mb-3">Pelicula</h2>
                <Form.Control type="text" className="mb-2" placeholder="Nombre" value={this.props.pelicula.nombre} onChange={(e) => this.props.setNombrePelicula(e.target.value)} />
                <Form.Control type="text" className="mb-2" placeholder="Director" value={this.props.pelicula.director} />
                <Form.Control as="select" className="mb-2" ref={select => this.select = select} value={this.props.pelicula.categoria}>
                    <option>Terror</option>
                    <option>Amor</option>
                    <option>Acción</option>
                </Form.Control>
                <Form.Control type="text" placeholder="Protagonistas (separar por comas)" value={this.props.pelicula.protagonistas} />
            </Container>
        );
    }
}

export default connect(null, { setNombrePelicula, setDirectorPelicula, setCategoriaPelicula, setProtagonistas })(PeliculaForm);