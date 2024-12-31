import React from 'react';

function ConfirmDialog({ taskTitle, onConfirm, onCancel }) {
  return (
    <div className="overlay">
      <div className="dialog">
        <h3>Are you sure you want to mark the task "{taskTitle}" as completed?</h3>
        <div>
          <button onClick={onConfirm}>Confirm</button>
          <button className="cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
