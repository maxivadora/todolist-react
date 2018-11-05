import React from 'react';
import NewTodo from './components/NewTodo';
import ListTodo from './components/ListTodo';
import { Row, Col } from 'reactstrap'

const HomePage = ()=> {
  return(
    <Row>
      <Col md={{size: 8, offset: 2}}>
        <NewTodo />
        <hr />
        <ListTodo />
      </Col>
    </Row>
  )
}

export default HomePage;