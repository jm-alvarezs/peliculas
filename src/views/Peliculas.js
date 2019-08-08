import React, { Component } from "react";
import PeliculaCard from "../components/PeliculaCard";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import PeliculaModal from "../components/PeliculaModal";
import PeliculasHeader from "../components/PeliculasHeader";
import {
  getPeliculas,
  searchPelicula,
  editarPelicula,
  clearPelicula,
  updatePelicula,
  postPelicula,
  hideModal
} from "../actions/peliculasActions";
import { connect } from "react-redux";

class Peliculas extends Component {
  componentWillMount() {
    this.props.getPeliculas();
  }

  renderPeliculas() {
    if (this.props.peliculas) {
      if (this.props.peliculas.length > 0) {
        let peliculas = [];
        if (this.props.searchResult) {
          peliculas = this.props.searchResult;
          if (peliculas.length === 0)
            return <p>No hay peliculas para esa búsqueda</p>;
        } else {
          peliculas = this.props.peliculas;
        }
        return peliculas.map(pelicula => (
          <PeliculaCard pelicula={pelicula} key={pelicula.id} />
        ));
      }
      return <p>No hay peliculas</p>;
    }
    return <></>;
  }

  render() {
    return (
      <Container className="mt-3">
        <PeliculasHeader onClick={this.props.editarPelicula} />
        <Form.Control
          type="text"
          className="border-0 pl-0 pr-0"
          placeholder="Buscar por Nombre de Pelicula, Director, Categoria o Protagonistas..."
          onChange={e => this.props.searchPelicula(e.target.value)}
        />
        <hr />
        {this.renderPeliculas()}
        <PeliculaModal
          showModal={this.props.showModal}
          pelicula={this.props.pelicula}
          hideModal={this.props.hideModal}
          onConfirm={() =>
            this.props.pelicula.id !== "nueva"
              ? this.props.updatePelicula(this.props.pelicula)
              : this.props.postPelicula(this.props.pelicula)
          }
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  peliculas: state.peliculas.peliculas,
  searchResult: state.peliculas.searchResult,
  pelicula: state.peliculas.pelicula,
  showModal: state.peliculas.showModal
});

export default connect(
  mapStateToProps,
  { getPeliculas, searchPelicula, editarPelicula, clearPelicula, hideModal, updatePelicula, postPelicula }
)(Peliculas);
