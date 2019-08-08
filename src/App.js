import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import PeliculasCard from './components/PeliculasCard';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <h1>Peliculas</h1>
          <Form.Control type="text" className="border-0 pl-0 pr-0" placeholder="Buscar por Nombre de Pelicula, Director, Categoria o Protagonistas..." />
          <hr />
          <PeliculasCard />
        </Container>
      </Provider>
    );
  }

}

export default App;
