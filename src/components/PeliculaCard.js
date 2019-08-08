import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

class PeliculaCard extends Component {
    render() {
        return (
            <Card className="p-3 rounded shadow-sm">
                <Row>
                    <Container fluid={true}>
                        <h3>Pelicula</h3>
                        <h4>Director</h4>
                        <h5>Categoría</h5>
                        <p>Protagonistas</p>
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