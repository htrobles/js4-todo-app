import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function AddTaskForm({ onAddTask }) {
  const [description, setDescription] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      setErrorMessage('Description is required');
      return;
    }

    setErrorMessage(null);

    onAddTask({
      id: uuid(),
      description,
      isCompleted,
    });

    setDescription('');
    setIsCompleted(false);
  };

  return (
    <div>
      <h2>Add a new task:</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor='description'>Description</label>
        <input
          type='text'
          id='description'
          name='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor='isCompleted'>Status</label>
        <select
          name='isCompleted'
          id='isCompleted'
          value={isCompleted}
          onChange={(e) => setIsCompleted(e.target.value)}
        >
          <option value={false}>Open</option>
          <option value={true}>Completed</option>
        </select>
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}
