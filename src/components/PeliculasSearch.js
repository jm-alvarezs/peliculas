import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactDOM from "react-dom";

class PeliculasSearch extends Component {

  constructor(props) {
    super(props);
    this.setValue = this.setValue.bind(this);
  }

  setValue() {
    let value = ReactDOM.findDOMNode(this.select).value;
    this.props.modifier(value);
  }

  componentDidMount() {
    this.setValue();
  }

  render() {
    return (
      <Row>
        <Col xs={12} sm={8} md={10} className="pr-0">
          <Form.Control
            type="text"
            className="border-0 pl-0 pr-0"
            placeholder="Buscar por Nombre de Pelicula, Director, Categoria o Protagonistas..."
            onChange={e => this.props.search(e.target.value)}
          />
        </Col>
        <Col xs={12} sm={4} md={2}>
          <Form.Control as="select" ref={select => this.select = select} onChange={this.setValue}>
            <option>Todo</option>
            <option>Nombre</option>
            <option>Director</option>
            <option>Categoria</option>
            <option>Protagonistas</option>
          </Form.Control>
        </Col>
      </Row>
    );
  }
}

export default PeliculasSearch;
