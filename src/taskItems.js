import React from "react";

const TaskItem = ({ task, onDelete, onEdit }) => {
  const priorityClass =
    task.priority === "High"
      ? "PriorityHigh"
      : task.priority === "Medium"
      ? "PriorityMedium"
      : "PriorityLow";

  return (
    <div className="TaskCard">
      <div className="TaskHeader">
        <h3 className="TaskTitle">{task.title}</h3>
        <div style={{ display: "flex", gap: "8px" }}>
          <span className={`TaskBadge ${priorityClass}`}>{task.priority}</span>
          <span className="TaskCategory">{task.category}</span>
        </div>
      </div>
      <p className="TaskDescription">{task.description}</p>
      <p className="TaskDate">Due: {task.date}</p>
      <div className="TaskActions">
        <button onClick={() => onEdit(task)} className="ButtonEdit">
          Edit
        </button>
        <button onClick={() => onDelete(task.id)} className="ButtonDelete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
