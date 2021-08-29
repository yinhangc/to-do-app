import React, { useRef } from "react";
import "./styles.scss";

const AddBar = ({ input, setInput, tasks, setTasks }) => {
  const inputRef = useRef();
  const messageRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      messageRef.current.style.display = "block";
      return;
    }
    const id = Math.random() * 100000;
    const newTask = { id, name: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
    messageRef.current.style.display = "none";
  };

  return (
    <div className="addbar">
      <form onSubmit={onSubmit} className="addbar__form">
        <input
          className="addbar__text"
          type="text"
          placeholder="Add a task"
          value={input}
          onChange={onInputChange}
          ref={inputRef}
        />
        <input className="addbar__submit" type="submit" value="+" />
      </form>
      <div className="addbar__msg" ref={messageRef}>
        <p>Input cannot be empty!</p>
      </div>
    </div>
  );
};

export default AddBar;
