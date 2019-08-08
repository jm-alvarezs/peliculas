import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PeliculaForm from "./PeliculaForm";

class PeliculaModal extends Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
        <PeliculaForm pelicula={this.props.pelicula} />
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={this.props.hideModal}>
            Cancelar
          </Button>
          <Button variant="success" className="pl-5 pr-5">
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PeliculaModal;
