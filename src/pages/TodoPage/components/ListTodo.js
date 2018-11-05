import React from 'react';
import { Table, Input, Button} from 'reactstrap';

class ListTodo extends React.Component {

  componentDidMount(){
    this.props.todoActions.fetchTodos();
  }

  hangleOnChange = (todo) => {
    const todoUpdated = todo;
    todoUpdated.completed = !todo.completed;
    this.props.todoActions.switchCompleted(todoUpdated);
  }

  deleteTodo = (todo)=> {
    this.props.todoActions.deleteTodo(todo);
  }

  render() {
    return (
      <Table borderless hover className="mt-4">
        <tbody>
          { this.props.todos.map(todo => (
            <tr key={todo.id}>
              <td className="text-right">
                <Input type="checkbox" checked={todo.completed}
                  onChange={()=> this.hangleOnChange(todo)}
                />
              </td>
              <td> {todo.title} </td>
              <td>
                <Button onClick={()=> this.deleteTodo(todo)} outline color="danger" size="sm">
                  Borrar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ListTodo;
