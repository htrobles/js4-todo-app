import React from 'react';
import Task from '../Task';

export default function Tasks({
  tasks,
  onChangeStatus,
  onRemoveTask,
  onClearTasks,
}) {
  return (
    <>
      <div className='tasks'>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onChangeStatus={onChangeStatus}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </div>
      {tasks.length ? (
        <button onClick={onClearTasks}>Clear Tasks</button>
      ) : null}
    </>
  );
}
