import React, { useState } from 'react';

function TaskForm({ createTask }) {
  const [taskData, setTaskData] = useState({
    title: '',
    priority: 'Medium',
    dueDate: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { 
      id: Date.now(), 
      ...taskData, 
      completed: false 
    };
    createTask(newTask);
    setTaskData({ title: '', priority: 'Medium', dueDate: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={taskData.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <select
        name="priority"
        value={taskData.priority}
        onChange={handleChange}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        name="dueDate"
        value={taskData.dueDate}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
