// utils.js

// Function to sort tasks by due date
export const sortByDate = (tasks) => {
    return tasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  };
  
  // Function to sort tasks by priority
  export const sortByPriority = (tasks) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return tasks.slice().sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  };
  