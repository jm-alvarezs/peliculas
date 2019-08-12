import React, { Component } from "react";
import PeliculaCard from "../components/PeliculaCard";
import Container from "react-bootstrap/Container";
import PeliculaModal from "../components/PeliculaModal";
import PeliculasHeader from "../components/PeliculasHeader";
import {
  getPeliculas,
  searchPelicula,
  editarPelicula,
  clearPelicula,
  updatePelicula,
  postPelicula,
  setSearchType
} from "../actions/peliculasActions";
import { hideModal } from "../actions/modalActions";
import { connect } from "react-redux";
import PeliculasSearch from "../components/PeliculasSearch";

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
          <PeliculaCard
            pelicula={pelicula}
            key={pelicula.id}
            confirmEdit={() => {
              this.props.updatePelicula(
                this.props.pelicula,
                this.props.getPeliculas
              );
            }}
          />
        ));
      }
      return <p>No hay peliculas</p>;
    }
    return <></>;
  }

  render() {
    return (
      <Container className="mt-3">
        <PeliculasHeader
          onClick={this.props.editarPelicula}
          callback={() => {
            this.props.postPelicula(
              this.props.pelicula,
              this.props.getPeliculas
            );
          }}
        />
        <PeliculasSearch
          modifier={this.props.setSearchType}
          search={this.props.searchPelicula}
        />
        <hr />
        {this.renderPeliculas()}
        <PeliculaModal
          title={"Administrar Pelicula"}
          showModal={this.props.showModal}
          pelicula={this.props.pelicula}
          hideModal={this.props.hideModal}
          onConfirm={this.props.onConfirm}
          component={this.props.component}
          message={this.props.message}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  peliculas: state.peliculas.peliculas,
  searchResult: state.peliculas.searchResult,
  pelicula: state.peliculas.pelicula,
  showModal: state.modal.showModal,
  onConfirm: state.modal.onConfirm,
  component: state.modal.component,
  message: state.modal.message
});

export default connect(
  mapStateToProps,
  {
    getPeliculas,
    searchPelicula,
    editarPelicula,
    clearPelicula,
    hideModal,
    updatePelicula,
    postPelicula,
    setSearchType
  }
)(Peliculas);
