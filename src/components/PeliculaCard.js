import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

class PeliculaCard extends Component {
    render() {
        return (
            <Card className="p-3 mb-2 rounded shadow-sm">
                <Row>
                    <Container fluid={true}>
                        <h3>{this.props.pelicula.nombre}</h3>
                        <h4>{this.props.pelicula.director}</h4>
                        <h5>{this.props.pelicula.categoria}</h5>
                        <p>{this.props.pelicula.protagonistas.map((protagonista, index) => <span key={index}>{protagonista}{", "}</span>)}</p>
                    </Container>
                </Row>
                <Row>
                    <Container fluid={true} className="text-right">
                        <Button variant="outline-secondary">
                            Edit
                        </Button>
                    </Container>
                </Row>
            </Card>
        );
    }
}

export default PeliculaCard; 