import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // for redirect after logout
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import AddTask from "./taskForm";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [priority, setPriority] = useState("All Priorities");
  const [date, setDate] = useState(null);
  const [showAddTask, setShowAddTask] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(
        JSON.parse(savedTasks, (key, value) => {
          if (key === "deadline" || key === "reminder") {
            return value ? new Date(value) : null;
          }
          return value;
        })
      );
    }
  }, []);//When the page loads, this code checks if there are any tasks saved in the browser.If yes, it loads them into your app and also makes sure that dates are properly converted back into real JavaScript Date objects.

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    if (isEditing) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask;
      setTasks(updatedTasks);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTasks((prev) => [...prev, newTask]);
    }
    setShowAddTask(false);
  };

  const handleDeleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setShowAddTask(true);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" || task.category === category;

    const matchesPriority =
      priority === "All Priorities" || task.priority === priority;

    const matchesDate =
      !date ||
      (task.deadline && task.deadline.toDateString() === date.toDateString());

    return matchesSearch && matchesCategory && matchesPriority && matchesDate;
  });

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to logout?");
    if (confirmed) {
      localStorage.removeItem("currentUser");
      //  localStorage.removeItem("tasks"); // optional: clear tasks too
      navigate("/"); // redirect to login page 
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>
      <p>
        Welcome, <strong>{localStorage.getItem("currentUser")}</strong>!
      </p>

      <button
        style={{ marginRight: "10px", backgroundColor: "blue", color: "white" }}
        onClick={handleLogout}
      >
        Logout
      </button>

      <button
        style={{ backgroundColor: "blue", color: "white" }}
        onClick={() => {
          setShowAddTask(!showAddTask);
          setIsEditing(false);
          setEditIndex(null);
        }}
      >
        {showAddTask ? "Close" : "Add Task"}
      </button>

      {showAddTask && (
        <div style={{ marginTop: "20px" }}>
          <AddTask
            onAddTask={handleAddTask}
            existingTask={isEditing ? tasks[editIndex] : null}
          />
        </div>
      )}

      {/* Filters */}
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Search Tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>All Categories</option>
          <option>Work</option>
          <option>Personal</option>
        </select>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>All Priorities</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          placeholderText="dd - mm - yyyy"
          dateFormat="dd-MM-yyyy"
        />
      </div>

      <h2 style={{ marginTop: "20px" }}>Tasks</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "100px",
        }}
      >
        {filteredTasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          filteredTasks.map((task, index) => (
            <div
              key={index}
              style={{ borderBottom: "1px solid #eee", marginBottom: "10px" }}
            >
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>
                <strong>Category:</strong> {task.category}
              </p>
              <p>
                <strong>Priority:</strong> {task.priority}
              </p>
              <p>
                <strong>Deadline:</strong>{" "}
                {task.deadline ? task.deadline.toLocaleDateString() : "N/A"}
              </p>
              <p>
                <strong>Reminder:</strong>{" "}
                {task.reminder ? task.reminder.toLocaleString() : "N/A"}
              </p>

              <button
                onClick={() => handleEditTask(index)}
                style={{
                  backgroundColor: "orange",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
              >
                Edit
              </button>

              <button
                onClick={() => handleDeleteTask(index)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
