import actionTypes from './TodoConstants';
import request from '../../shared/request';

const fetchTodos = ()=> (dispatch)=> {
  dispatch({type: actionTypes.FETCHING_TODOS});
  request.get('/todos')
    .then(response => {
      dispatch({
        type: actionTypes.FETCHING_TODOS_SUCCESS,
        payload: response
      });
    })
    .catch(error => {
      console.log(error)
    })
}

const deleteTodo = (todo)=> (dispatch)=> {
  dispatch({type: actionTypes.DELETING_TODO});
  request.delete(`/todos/${todo.id}`)
    .then(response => {
      dispatch({ type: actionTypes.DELETING_TODO_SUCCESS });
    })
    .catch(error => {
      console.log(error)
    })
}

const addTodo = (newTodo) => (dispatch)=> {
  dispatch({type: actionTypes.ADDING_TODO});
  request.post('/todos', {todo: newTodo} )
    .then(response => {
      dispatch({ 
        type: actionTypes.ADDING_TODO_SUCCESS,
        paylaod: response.data
      });
    })
    .catch(error => {
      console.log(error)
    })
}

const switchCompleted = (todo) => (dispatch)=> {
  dispatch({type: actionTypes.SWITCHING_TODO});
  request.patch(`/todos/${todo.id}`, {todo: {completed: todo.completed}})
    .then(response => {
      dispatch({ type: actionTypes.SWITCHING_TODO_SUCCESS });
    })
    .catch(error => {
      console.log(error)
    })
}

export { fetchTodos, deleteTodo, addTodo, switchCompleted };