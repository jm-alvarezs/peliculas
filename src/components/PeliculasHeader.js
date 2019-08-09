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
                <Button className="round15 block shadow-sm border-0" onClick={() => this.props.onClick({id: "nueva", nombre: "", director: "", categoria: "", protagonistas: ""})}>
                    <i className="fa fa-plus"></i> Agregar
                </Button>
            </Col>
        </Row>
        );
    }
}

export default PeliculasHeader;