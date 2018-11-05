import React, { Component, Fragment } from 'react';
import TodoPage from './pages/TodoPage/TodoPage'
import { Container } from 'reactstrap';
import NavBar from './shared/components/NavBar';
import { Provider } from 'react-redux';
import store from './redux/configStore';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <NavBar />
          <Container>
            <TodoPage />
          </Container>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
