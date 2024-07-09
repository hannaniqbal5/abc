import React from "react";

function TodoList(props) {
  return (
    <ul className="list-group">
      {props.todos.map((todo) => (
        <li className="list-group-item">
          <span className="badge"></span>
          <span>{todo.title}</span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;