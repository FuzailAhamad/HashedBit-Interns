import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, index, toggleComplete, removeTodo }) => (
  <li
    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
  >
    {todo.text}
    <button onClick={() => toggleComplete(index)}>{todo.completed ? 'Undo' : 'Complete'}</button>
    <button onClick={() => removeTodo(index)}>Remove</button>
  </li>
);

export default TodoItem;
