import React, { Component } from "react";
import PeliculaCard from '../components/PeliculaCard';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { getPeliculas, searchPelicula, editarPelicula, clearPelicula, hideModal } from "../actions/peliculasActions";
import { connect } from "react-redux";
import PeliculaForm from "../components/PeliculaForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class Peliculas extends Component {

    componentWillMount() {
        this.props.getPeliculas();
    }

    renderPeliculas() {
        if (this.props.peliculas) {
            if (this.props.peliculas.length > 0) {
                let peliculas = [];
                if(this.props.searchResult) {
                    peliculas = this.props.searchResult;
                    if(peliculas.length === 0) return <p>No hay peliculas para esa búsqueda</p>;
                } else {
                    peliculas = this.props.peliculas;
                }
                return peliculas.map(pelicula => <PeliculaCard pelicula={pelicula} key={pelicula.id} />);
            }                
            return <p>No hay peliculas</p>;
        }
        return <></>;
    }

    render() {
        return (
            <Container className="mt-3">
                <Row>
                    <Col>
                        <h1>Peliculas</h1>
                    </Col>
                    <Col className="text-right">
                        <Button variant="success" className="rounded pr-4 pl-4 shadow-sm" onClick={() => this.props.editarPelicula({id: "nueva", nombre: "", director: "", categoria: "", protagonistas: ""})}>
                            Agregar Pelicula
                        </Button>
                    </Col>
                </Row>
                <Form.Control type="text" className="border-0 pl-0 pr-0" placeholder="Buscar por Nombre de Pelicula, Director, Categoria o Protagonistas..." onChange={(e) => this.props.searchPelicula(e.target.value)} />
                <hr />
                {this.renderPeliculas()}
                <Modal show={this.props.showModal} onHide={this.props.hideModal}>
                    <PeliculaForm pelicula={this.props.pelicula} />
                </Modal>
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

export default connect(mapStateToProps, { getPeliculas, searchPelicula, editarPelicula, clearPelicula, hideModal })(Peliculas);