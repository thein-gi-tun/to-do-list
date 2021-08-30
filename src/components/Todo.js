import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

function Todo({ todos, completeTodo, removeTodo }) {
  return todos.map((todo, index) => (
    <div key={index} className="todo-row">
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete_icons"
        />
      </div>
    </div>
  ));
}

export default Todo;
