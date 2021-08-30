import React, { useState } from "react";

function TodoForm(props) {
  const [input, setinput] = useState("");
  const handleChange = (e) => {
    setinput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 1000), // setting random ID
      text: input,
    });
    setinput(""); //clearing the text box after user submit
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        onChange={handleChange}
        className="todo-input"
      />
      <button className="todo-button">Add</button>
    </form>
  );
}

export default TodoForm;
