import React, { useState, useEffect } from "react";

const TaskForm = ({ onAddTask, existingTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Work");
  const [priority, setPriority] = useState("Medium");
  const [deadline, setDeadline] = useState(null);
  const [reminder, setReminder] = useState(null);

  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title || "");
      setDescription(existingTask.description || "");
      setCategory(existingTask.category || "Work");
      setPriority(existingTask.priority || "Medium");
      setDeadline(existingTask.deadline ? new Date(existingTask.deadline) : null);
      setReminder(existingTask.reminder ? new Date(existingTask.reminder) : null);
    } else {
      setTitle("");
      setDescription("");
      setCategory("Work");
      setPriority("Medium");
      setDeadline(null);
      setReminder(null);
    }
  }, [existingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    const newTask = {
      id: existingTask ? existingTask.id : Date.now(), // add id for new tasks
      title,
      description,
      category,
      priority,
      date: deadline ? deadline.toISOString().substr(0, 10) : "",
      reminder,
    };

    onAddTask(newTask);
  };

  return (
    <form onSubmit={handleSubmit} className="TaskForm">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="TaskInput"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="TaskTextarea"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="TaskSelect"
      >
        <option>Work</option>
        <option>Personal</option>
      </select>
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="TaskSelect"
      >
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>
      <input
        type="date"
        value={deadline ? deadline.toISOString().substr(0, 10) : ""}
        onChange={(e) =>
          setDeadline(e.target.value ? new Date(e.target.value) : null)
        }
        className="TaskDateInput"
      />
      <input
        type="datetime-local"
        value={reminder ? reminder.toISOString().slice(0, 16) : ""}
        onChange={(e) =>
          setReminder(e.target.value ? new Date(e.target.value) : null)
        }
        className="TaskDateTimeInput"
      />
      <button type="submit" className="TaskButton">
        {existingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
