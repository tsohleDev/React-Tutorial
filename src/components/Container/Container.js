import { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import Input from '../Input/Input';
import './Container.css';

function Container() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="container">
      <h1>toDos</h1>
      <p>by Duphis Cooperation</p>
      <Input onset={setTodos} todos={todos} />
      <TodoList onset={setTodos} todos={todos} />
    </div>
  );
}

export default Container;
