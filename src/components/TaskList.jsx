import React, { useState } from 'react';
import Task from './Task';
import ConfirmDialog from './ConfirmDialog';

function TaskList({ tasks, markTaskCompleted }) {
  const [showDialog, setShowDialog] = useState(false);
  const [taskToComplete, setTaskToComplete] = useState(null);
  const handleComplete = (task) => {
    setTaskToComplete(task);
    setShowDialog(true);
  };
  const handleConfirmComplete = () => {
    markTaskCompleted(taskToComplete.id);
    setShowDialog(false);
    setTaskToComplete(null);
  };
  const handleCancelComplete = () => {
    setShowDialog(false);
    setTaskToComplete(null);
  };
  return (
    <div>
      {showDialog && (
        <ConfirmDialog 
          taskTitle={taskToComplete?.title}
          onConfirm={handleConfirmComplete}
          onCancel={handleCancelComplete}
        />
      )}

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <Task 
            key={task.id} 
            task={task} 
            onComplete={() => handleComplete(task)} 
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
