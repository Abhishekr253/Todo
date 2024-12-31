import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { sortByDate, sortByPriority } from './utils';
import './components/styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [sortOrder, setSortOrder] = useState('date');
  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };
  const markTaskCompleted = (taskId) => {
    setTasks(tasks.map((task) => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedTasks = () => {
    if (sortOrder === 'date') {
      return sortByDate(tasks);
    } else {
      return sortByPriority(tasks);
    }
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <select onChange={handleSortChange} value={sortOrder}>
        <option value="date">Sort by Due Date</option>
        <option value="priority">Sort by Priority</option>
      </select>
      <TaskForm createTask={addTask} />
      <TaskList 
        tasks={sortedTasks()} 
        markTaskCompleted={markTaskCompleted} 
      />
    </div>
  );
}

export default App;
