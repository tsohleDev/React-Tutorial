import PropTypes from 'prop-types';

function Input(props) {
  const { todos, onset } = props;

  const formSubmit = () => {
    const form = document.querySelector('.input-text');

    if (form.value) {
      const item = {
        id: todos.length + 1,
        text: form.value,
        completed: false,
      };
      const list = [item, ...todos];
      onset(list);
    }
  };

  return (
    <div className="input">
      <input type="text" className="input-text" />

      <input value="Submit" onClick={() => { formSubmit(); }} type="button" />
    </div>
  );
}

Input.propTypes = {
  onset: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Input;
