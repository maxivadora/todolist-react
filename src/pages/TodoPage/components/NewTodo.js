import React from 'react';
import { Form, Button, Input } from 'reactstrap';

class NewTodo extends React.Component {
  state = {
    inputTodo: ''
  }

  inputTodoChange = (e)=> {
    this.setState({ inputTodo: e.target.value });
  }

  handleSubmit = (e)=> {
    e.preventDefault();
    const newTodo = { title: this.state.inputTodo }
    this.props.todoActions.addTodo(newTodo);
  }

  render(){
    return(
      <div className="mt-3">
        <h1> Nuevo TODO </h1>
        <Form onSubmit={ this.handleSubmit }>
          <Input 
            placeholder="Escriba aquí..."
            onChange={ this.inputTodoChange }
          />
          <br />
          <Button size="sm" color="secondary" block > Submit </Button>
        </Form>
      </div>
    )
  }
}

export default NewTodo;