import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import PeliculaForm from "./PeliculaForm";
import { connect } from "react-redux";

class PeliculaModal extends Component {
  renderComponent() {
    if (this.props.component === "form") {
      if (this.props.pelicula)
        return <PeliculaForm pelicula={this.props.pelicula} />;
    }
    return (
      <Container fluid={true} className="mt-3">
        <p>{this.props.message}</p>
      </Container>
    );
  }

  disableButton() {
    if (this.props.component) {
      if (this.props.pelicula) {
        if (
          this.props.pelicula.nombre !== "" &&
          this.props.pelicula.director !== "" &&
          this.props.pelicula.protagonistas !== "" &&
          this.props.pelicula.duracion !== ""
        )
          return false;
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
        <Modal.Header>
          <h2>{this.props.title}</h2>
        </Modal.Header>
        {this.renderComponent()}
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={this.props.hideModal}>
            Cancelar
          </Button>
          <Button
            className="pl-5 pr-5"
            onClick={this.props.onConfirm}
            disabled={this.disableButton()}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  pelicula: state.peliculas.pelicula
});

export default connect(
  mapStateToProps,
  null
)(PeliculaModal);
