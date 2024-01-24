import React from "react";

export default function Task({ task, onChangeStatus, onRemoveTask }) {
  const { id, description, isCompleted } = task;

  return (
    <div className="task">
      <h3 className="task-description">{description}</h3>
      <p className="task-id">id: {id}</p>
      <p className="status">
        status: {isCompleted ? "Completed" : "Open"}
      </p>
      <button onClick={() => onChangeStatus(id)}>Change Status</button>
      <button onClick={() => onRemoveTask(id)}>Remove Task</button>
    </div>
  );
}
