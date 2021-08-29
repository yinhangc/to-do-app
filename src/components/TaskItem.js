import React from "react";

const TaskItem = ({ task, tasks, setTasks }) => {
  const onCompleted = () => {
    setTimeout(() => {
      setTasks(
        tasks.map((t) => {
          if (t.id === task.id) {
            return { ...task, completed: !task.completed };
          } else {
            return t;
          }
        })
      );
    }, 400);
  };

  const onDelete = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        id={`toggle_${task.id}`}
        defaultChecked={!task.completed ? false : true}
      />
      <label
        className="task-item__name"
        htmlFor={`toggle_${task.id}`}
        onClick={onCompleted}
      >
        <span className="task-item__checkmark"></span>
        {task.name}
      </label>
      <button className="task-item__cross" onClick={onDelete}>
        &#10005;
      </button>
    </div>
  );
};

export default TaskItem;
