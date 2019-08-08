import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PeliculaForm from "./PeliculaForm";

class PeliculaModal extends Component {

  renderForm() {
    if(this.props.pelicula) return <PeliculaForm pelicula={this.props.pelicula} />;
    return <></>;
  }

  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
        <Modal.Header>
          <h2>Pelicula</h2>
        </Modal.Header>
        {this.renderForm()}
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={this.props.hideModal}>
            Cancelar
          </Button>
          <Button variant="success" className="pl-5 pr-5" onClick={this.props.onConfirm}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PeliculaModal;
