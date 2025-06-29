import React, { useState } from "react";
import TaskForm from "./taskForm.js";
import TaskItem from "./taskItems.js";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [sortBy, setSortBy] = useState("date");

  const addOrUpdateTask = (task) => {
     // Change the list of tasks
    setTasks((prevTasks) => {
       // Find if the task is already in the list
      const existingIndex = prevTasks.findIndex((t) => t.id === task.id);
      // If found, copy the list
      if (existingIndex !== -1) {
        const updatedTasks = [...prevTasks];
        // Replace the old task with the new one
        updatedTasks[existingIndex] = task;
        // Return the new list
        return updatedTasks;
      } else {
        // If not found, add the new task to the list where oldTasks is an array of tasks you already have.


        return [...prevTasks, task];
      }
    });
    setEditingTask(null);// Stop editing the task now
  };

  // Function to delete a task by its id
  const deleteTask = (taskId) => {
    // Ask user to confirm before deleting
    if (window.confirm("Are you sure you want to delete this task?")) {
       // Remove the task with matching id from the tasks list
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    }
  };

  // Function to start editing a task
  const editTask = (task) => {
     // Set the task to be edited
    setEditingTask(task);
  };
  
  // Sort tasks based on selected criteria (priority or date)

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === "priority") {
       // Map priority levels to numbers for sorting
      const priorityMap = { High: 1, Medium: 2, Low: 3 };
      // Sort tasks by priority value (1 = highest priority)
      return priorityMap[a.priority] - priorityMap[b.priority];
    } else {
      // Otherwise, sort tasks by date (earlier date first)
      return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <div className="TaskPageContainer">
      <h2 className="TaskPageTitle">Task Manager</h2>

      <div className="SortButtons">
        <button
          className={`SortButton ${sortBy === "date" ? "SortButtonActive" : ""}`}
          onClick={() => setSortBy("date")}
        >
          Sort by Date
        </button>
        <button
          className={`SortButton ${
            sortBy === "priority" ? "SortButtonActive" : ""
          }`}
          onClick={() => setSortBy("priority")}
        >
          Sort by Priority
        </button>
      </div>
            {/* Form component to add or update tasks */}
      <TaskForm onAddTask={addOrUpdateTask} existingTask={editingTask} />
          {/* List of task items, rendered after sorting */}
      <div>
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
