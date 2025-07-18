import React from "react";

function TaskCard(props) {
  const task = props.task;

  function handleToggle() {
    props.toggleComplete(task.id);
  }

  function handleDelete() {
    props.deleteTask(task.id);
  }
  return (
    <div>
      <p>{task.tittle}</p>
      <p>{task.completed ? "completed" : "Not completed"} </p>
      <button onClick={handleToggle}> Toggle Complete</button>
      <button onClick={handleDelete}> Delete</button>
    </div>
  );
}

export default TaskCard;
