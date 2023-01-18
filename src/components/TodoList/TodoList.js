import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';

function TodoList(props) {
  const { todos, onset } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todos={todos}
          onset={onset}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  onset: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
};

export default TodoList;
