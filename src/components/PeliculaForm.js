import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import ReactDOM from "react-dom";
import {
  setNombrePelicula,
  setDirectorPelicula,
  setCategoriaPelicula,
  setProtagonistas,
  setDuracionPelicula
} from "../actions/peliculasActions";
import { connect } from "react-redux";

class PeliculaForm extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    let value = ReactDOM.findDOMNode(this.select).value;
    this.props.setCategoriaPelicula(value);
  }

  componentDidMount() {
    this.handleSelect();
  }

  render() {
    return (
      <Container fluid={true} className="pt-3 pb-4">
        <Form>
          <Form.Control
            type="text"
            className="mb-2"
            placeholder="Nombre"
            value={this.props.pelicula.nombre}
            onChange={e => this.props.setNombrePelicula(e.target.value)}
          />
          <Form.Control
            type="text"
            className="mb-2"
            placeholder="Director"
            value={this.props.pelicula.director}
            onChange={e => this.props.setDirectorPelicula(e.target.value)}
          />
          <Form.Control
            type="number"
            className="mb-2"
            placeholder="Duración"
            value={this.props.pelicula.duracion}
            onChange={e => this.props.setDuracionPelicula(e.target.value)}
          />
          <Form.Control
            as="select"
            className="mb-2"
            ref={select => (this.select = select)}
            value={this.props.pelicula.categoria}
            onChange={this.handleSelect}
          >
            <option>Terror</option>
            <option>Amor</option>
            <option>Acción</option>
          </Form.Control>
          <Form.Control
            type="text"
            placeholder="Protagonistas (separar por comas)"
            value={this.props.pelicula.protagonistas}
            onChange={e => this.props.setProtagonistas(e.target.value)}
          />
        </Form>
      </Container>
    );
  }
}

export default connect(
  null,
  {
    setNombrePelicula,
    setDirectorPelicula,
    setCategoriaPelicula,
    setProtagonistas,
    setDuracionPelicula
  }
)(PeliculaForm);
