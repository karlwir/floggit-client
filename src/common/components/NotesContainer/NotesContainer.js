import { connect } from 'react-redux';

import TodosWrapper from './TodosWrapper';
import { addTodo, removeTodo } from '../../../reduxStore/config/todos';
import { updateUserName } from '../../../reduxStore/config/user';

const mapStateToProps = state => ({
  todos: state.todos,
  username: state.user.name,
});

const mapDispatchToProps = dispatch => ({
  handleRemove: (id) => {
    dispatch(removeTodo(id));
  },
  handleAdd: (value) => {
    dispatch(addTodo(value));
  },
  handleSetUserName: (name) => {
    dispatch(updateUserName(name));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosWrapper);
