import React from "react";
import { formatDate } from "../utils/format";

export default function TaskCard({ task, onView, onEdit, onDelete }) {
  if (!task) return null;

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title mb-2">{task?.title || "No Title"}</h5>

        <div className="mb-1">
          <span className="badge text-bg-secondary me-2">Status</span>
          <span>{task?.status || "-"}</span>
        </div>

        <div className="mb-1">
          <span className="badge text-bg-info me-2">Priority</span>
          <span>{task?.priority || "-"}</span>
        </div>

        <div className="mb-0">
          <span className="badge text-bg-dark me-2">Due</span>
          <span>{task?.dueDate ? formatDate(task.dueDate) : "-"}</span>
        </div>
      </div>

      <div className="card-footer bg-white border-0 d-flex gap-2">
        <button className="btn btn-sm btn-outline-dark" onClick={onView}>
          View
        </button>
        <button className="btn btn-sm btn-outline-primary" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}