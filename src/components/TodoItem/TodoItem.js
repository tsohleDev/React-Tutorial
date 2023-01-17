import PropTypes from 'prop-types';
import './TodoItem.css';

function TodoItem(props) {
  const { todos, todo, onset } = props;

  const deleteTodo = (id) => {
    const list = todos.filter((item) => item.id !== id);
    onset(list);
  };

  return (
    <li>
      <input className="itemIn" type="checkbox" checked={todo.completed} />
      {todo.text}
      <input className="itemIn" type="button" onClick={() => { deleteTodo(todo.id); }} value="Delete" />
    </li>
  );
}

TodoItem.propTypes = {
  onset: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
};

export default TodoItem;
