import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  getPeliculas,
  editarPelicula,
  deletePelicula,
  updatePelicula
} from "../actions/peliculasActions";
import { confirm, hideModal } from "../actions/modalActions";
import { connect } from "react-redux";

class PeliculaCard extends Component {
  render() {
    return (
      <Card className="p-3 mb-2 rounded shadow-sm">
        <Row>
          <Container fluid={true}>
            <h3>{this.props.pelicula.nombre}</h3>
            <h4>{this.props.pelicula.director}</h4>
            <h5>{this.props.pelicula.categoria}</h5>
            <h6>{this.props.pelicula.duracion}{" min"}</h6>
            <p>
              {this.props.pelicula.protagonistas}
            </p>
          </Container>
        </Row>
        <Row>
          <Col>
            <Button
              variant="outline-primary"
              onClick={() =>
                this.props.editarPelicula(
                  this.props.pelicula,
                  this.props.confirmEdit
                )
              }
            >
              <i className="fa fa-edit" /> Editar
            </Button>
          </Col>
          <Col className="text-right">
            <Button
              variant="outline-danger"
              onClick={() =>
                this.props.confirm(
                  `¿Eliminar pelicula ${
                    this.props.pelicula.nombre
                  }? Esta acción NO puede deshacerse.`,
                  () => {
                    this.props.deletePelicula(
                      this.props.pelicula.id,
                      this.props.getPeliculas
                    );
                    this.props.hideModal();
                  }
                )
              }
            >
              <i className="fa fa-trash" /> Eliminar Pelicula
            </Button>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default connect(
  null,
  {
    getPeliculas,
    editarPelicula,
    deletePelicula,
    updatePelicula,
    confirm,
    hideModal
  }
)(PeliculaCard);
