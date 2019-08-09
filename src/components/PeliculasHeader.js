import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class PeliculasHeader extends Component {
  render() {
    return (
      <Row>
        <Col xs={12} sm={8} md={10}>
          <h1>Peliculas</h1>
        </Col>
        <Col xs={12} sm={4} md={2} className="text-right">
          <Button
            block
            className="round15 block shadow-sm border-0"
            onClick={() =>
              this.props.onClick(
                {
                  id: "nueva",
                  nombre: "",
                  director: "",
                  categoria: "",
                  protagonistas: ""
                },
                this.props.callback
              )
            }
          >
            <i className="fa fa-plus" /> Agregar
          </Button>
        </Col>
      </Row>
    );
  }
}

export default PeliculasHeader;
