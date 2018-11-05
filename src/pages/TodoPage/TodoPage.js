import React from 'react';
import NewTodoConnector from './components/NewTodoConnector';
import ListTodoConnector from './components/ListTodoConnector';
import { Row, Col } from 'reactstrap'

const TodoPage = ()=> {
  return(
    <Row>
      <Col md={{size: 8, offset: 2}}>
        <NewTodoConnector />
        <hr />
        <ListTodoConnector />
      </Col>
    </Row>
  )
}

export default TodoPage;