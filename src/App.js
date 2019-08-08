import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import PeliculasCard from './components/PeliculasCard';
import Container from 'react-bootstrap/Container';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <h1>Peliculas</h1>
          <PeliculasCard />
        </Container>
      </Provider>
    );
  }

}

export default App;
