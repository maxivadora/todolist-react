import React from 'react';
import { Button, Input } from 'reactstrap';

class NewTodo extends React.Component {
  render(){
    return(
      <div className="mt-3">
        <h1> Nuevo TODO </h1>
        <Input placeholder="Escriba aquí..."/>
        <br />
        <Button size="sm" color="secondary" block >Submit</Button>
      </div>
    )
  }
}

export default NewTodo;