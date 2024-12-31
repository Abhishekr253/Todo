import React from 'react';

function Task({ task, onComplete }) {
  const { title, priority, dueDate, completed } = task;
  const formattedDate = new Date(dueDate).toLocaleDateString();

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={onComplete}
        disabled={completed}
      />
      <span>{title}</span>
      <span>{` | Priority: ${priority}`}</span>
      <span>{` | Due: ${formattedDate}`}</span>
      {completed && <span> (Completed)</span>}
    </div>
  );
}

export default Task;
