import React, { Component, Fragment } from 'react';
import TodoPage from './pages/TodoPage/TodoPage'
import { Container } from 'reactstrap';
import NavBar from './shared/components/NavBar';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container>
          <TodoPage />
        </Container>
      </Fragment>
    );
  }
}

export default App;
