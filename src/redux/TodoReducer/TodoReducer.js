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
      return { 
        ...state,
        deletingTodo: false
      }
    }

    case actionTypes.ADDING_TODO: {
      return { ...state, addingTodo: true }
    }

    case actionTypes.ADDING_TODO_SUCCESS: {
      return { 
        ...state,
        todo: action.payload,
        addingTodos: false
      }
    }

    case actionTypes.SWITCHING_TODO: {
      return { ...state, switchingTodo: true }
    }

    case actionTypes.SWITCHING_TODO_SUCCESS: {
      return { 
        ...state,
        todo: action.payload,
        switchingTodo: false
      }
    }

    default: {
      return state;
    }
  }
}

export default TodoReducer;