import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class PeliculasHeader extends Component {
    render() {
        return (
            <Row>
            <Col>
                <h1>Peliculas</h1>
            </Col>
            <Col className="text-right">
                <Button className="round15 pr-4 pl-4 p-2 shadow-sm border-0" onClick={() => this.props.onClick({id: "nueva", nombre: "", director: "", categoria: "", protagonistas: ""})}>
                    Agregar Pelicula
                </Button>
            </Col>
        </Row>
        );
    }
}

export default PeliculasHeader;