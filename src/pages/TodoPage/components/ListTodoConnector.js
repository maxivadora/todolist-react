import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTodos, deleteTodo, switchCompleted } from '../../../redux/TodoReducer/TodoActions';
import ListTodo from './ListTodo';

const mapStoreToProps = store => ({
  todos: store.TodoReducer.todos,
  fetchingTodos: store.TodoReducer.fetchingTodos,
  deletingTodo: store.TodoReducer.deletingTodo,
  switchingCompleted: store.TodoReducer.switchingCompleted
});

const mapDispatchToProps = dispatch => ({
  todoActions: bindActionCreators({ fetchTodos, deleteTodo, switchCompleted}, dispatch)
});

export default connect(mapStoreToProps, mapDispatchToProps)(ListTodo)