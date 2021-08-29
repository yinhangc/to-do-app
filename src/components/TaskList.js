import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks, filtered, status }) => {
  const renderedList = filtered.map((task) => {
    return (
      <TaskItem
        key={task.id}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        status={status}
      />
    );
  });

  return <div className="task-list">{renderedList}</div>;
};

export default TaskList;
