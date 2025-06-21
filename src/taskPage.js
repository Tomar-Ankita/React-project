import React, { useState } from "react";
import TaskForm from "./taskForm.js";
import TaskItem from "./taskItems.js";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [sortBy, setSortBy] = useState("date");

  const addOrUpdateTask = (task) => {
    setTasks((prevTasks) => {
      const existingIndex = prevTasks.findIndex((t) => t.id === task.id);
      if (existingIndex !== -1) {
        const updatedTasks = [...prevTasks];
        updatedTasks[existingIndex] = task;
        return updatedTasks;
      } else {
        return [...prevTasks, task];
      }
    });
    setEditingTask(null);
  };

  const deleteTask = (taskId) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    }
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === "priority") {
      const priorityMap = { High: 1, Medium: 2, Low: 3 };
      return priorityMap[a.priority] - priorityMap[b.priority];
    } else {
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

      <TaskForm onAddTask={addOrUpdateTask} existingTask={editingTask} />

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
