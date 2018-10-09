import React from 'worker-react';
import Todo from './todo';
import './index.less';


export default function({ todos, toggleTodo }) {
  return (<ul styleName="container">
    {todos && todos.map(todo =>
      (<Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />),
        )}
  </ul>);
}
