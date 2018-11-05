import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../../../redux/TodoReducer/TodoActions';
import NewTodo from './NewTodo';

const mapStoreToProps = store => ({
  addingTodo: store.TodoReducer.addingTodo
});

const mapDispatchToProps = dispatch => ({
  todoActions: bindActionCreators({ addTodo }, dispatch)
});

export default connect(mapStoreToProps, mapDispatchToProps)(NewTodo)