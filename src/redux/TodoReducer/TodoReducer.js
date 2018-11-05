import actionTypes from './TodoConstants';

const initialState = {
  fetchingTodos: false,
  todos: [],
  deletingTodo: false,
  addingTodo: false,
  newTodo: {},
  switchingCompleted: false
}

const TodoReducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.FETCHING_TODOS: {
      return { ...state, fetchingTodos: true }
    }
    
    case actionTypes.FETCHING_TODOS_SUCCESS: {
      return { 
        ...state,
        todos: action.payload.data,
        fetchingTodos: false
      }
    }

    case actionTypes.DELETING_TODO: {
      return { ...state, deletingTodo: true }
    }

    case actionTypes.DELETING_TODO_SUCCESS: {
      const todoFiltered = state.todos.filter((todo) => { return todo.id !== action.payload })
      return { 
        ...state,
        todos: todoFiltered,
        deletingTodo: false
      }
    }

    case actionTypes.ADDING_TODO: {
      return { ...state, addingTodo: true }
    }

    case actionTypes.ADDING_TODO_SUCCESS: {

      return { 
        ...state,
        todos: state.todos.concat(action.payload),
        addingTodos: false
      }
    }

    case actionTypes.SWITCHING_TODO: {
      return { ...state, switchingTodo: true }
    }

    case actionTypes.SWITCHING_TODO_SUCCESS: {
      const todoIndex = state.todos.findIndex((e) => { return e.id === action.payload.id });
      const stateCopy = state.todos.concat()
      stateCopy[todoIndex] = action.payload;
      return { 
        ...state,
        todos: stateCopy,
        switchingTodo: false
      }
    }

    default: {
      return state;
    }
  }
}

export default TodoReducer;