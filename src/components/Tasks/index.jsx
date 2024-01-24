import React, { useState } from "react";
import Task from "../Task";
import { v4 as uuid } from "uuid";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: "Play with the Cat",
      isCompleted: false,
    },
    {
      id: uuid(),
      description: "Cook Lunch",
      isCompleted: true,
    },
    {
      id: uuid(),
      description: "Vacuum the Floor",
      isCompleted: true,
    },
  ]);

  const handleChangeStatus = (id) => {
    const newTasks = [...tasks];

    const updatedTask = newTasks.find((task) => task.id === id);

    updatedTask.isCompleted = !updatedTask.isCompleted;

    setTasks(newTasks);
  };

  const handleRemoveTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  const handleClearTasks = () => {
    setTasks([]);
  };

  return (
    <>
      <div className="tasks">
        {tasks.map((task) => (
          <Task task={task} onChangeStatus={handleChangeStatus} onRemoveTask={handleRemoveTask} />
        ))}
      </div>
        {tasks.length ? (
          <button onClick={handleClearTasks}>Clear Tasks</button>
        ) : null}
    </>
  );
}
