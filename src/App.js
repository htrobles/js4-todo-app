import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import AddTaskForm from './components/AddTaskForm';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: 'Play with the Cat',
      isCompleted: false,
    },
    {
      id: uuid(),
      description: 'Cook Lunch',
      isCompleted: true,
    },
    {
      id: uuid(),
      description: 'Vacuum the Floor',
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

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className='App'>
      <Header />
      <Tasks
        tasks={tasks}
        onChangeStatus={handleChangeStatus}
        onRemoveTask={handleRemoveTask}
        onClearTasks={handleClearTasks}
      />
      <AddTaskForm onAddTask={handleAddTask} />
    </div>
  );
}

export default App;
