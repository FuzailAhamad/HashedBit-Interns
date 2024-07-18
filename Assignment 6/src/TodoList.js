import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, removeTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        index={index}
        todo={todo}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    ))}
  </ul>
);

export default TodoList;
