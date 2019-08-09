import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import PeliculaForm from "./PeliculaForm";

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
          <Button className="pl-5 pr-5" onClick={this.props.onConfirm}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PeliculaModal;
