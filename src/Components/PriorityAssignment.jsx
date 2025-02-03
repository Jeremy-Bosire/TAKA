import React, { useState } from "react";

function PriorityAssignmentForm ({ onSubmit, initialData }){
  const [formData, setFormData] = useState(initialData);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Assignment Title" required />
      <select name="progress" value={formData.progress} onChange={handleChange} required>
        <option value="">Select Progress</option>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required />
      <button className="save-button" type="submit">Save</button>
    </form>
  );
};

function PriorityAssignment() {
  const [assignment, setAssignment] = useState({ title: "MAIN ASSIGNMENT", progress: "Not Set", deadline: "Not Set" });
  const [showForm, setShowForm] = useState(false);

  function handleEditClick() {
    setShowForm(true);
  }

  function handleSubmit(data) {
    setAssignment(data);
    setShowForm(false);
  }

  return (
    <div className="top-row">
      <div className="top-row-1">
        <p className="top-row-title">TOP PRIORITY: {assignment.title}</p>
        <button onClick={handleEditClick} className="top-row-button">Edit</button>
      </div>
      <div className="top-row-2">
        <div className="top-row-2-1">
          <h1>Progress:</h1>
          <p>{assignment.progress}</p>
        </div>
        <div className="top-row-2-2">
          <h1>Deadline:</h1>
          <p>{assignment.deadline}</p>
        </div>
      </div>
      {showForm && <PriorityAssignmentForm onSubmit={handleSubmit} initialData={assignment} />}
    </div>
  );
};

export default PriorityAssignment;
