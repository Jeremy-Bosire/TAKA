import React, { useState } from 'react'

function AssignmentForm ({ onSubmit, initialData, isEditing }){
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
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
        <select name="progress" value={formData.progress} onChange={handleChange} required>
            <option value="">Select Progress</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
        </select>
        <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required />
        <button className='add-button' type="submit">{isEditing ? "Update" : "Add"}</button>
        </form>
    );
};

function AssignmentTracker (){
    const [assignments, setAssignments] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [initialData, setInitialData] = useState({ title: "", progress: "", deadline: "" });

    function handleAddClick() {
        setInitialData({ title: "", progress: "", deadline: "" });
        setIsEditing(false);
        setShowForm(true);
    }

    function handleEdit(index) {
        setInitialData(assignments[index]);
        setIsEditing(true);
        setEditIndex(index);
        setShowForm(true);
    }

    function handleDelete(index) {
        setAssignments(assignments.filter((_, i) => i !== index));
    }

    function handleSubmit(data) {
        if (isEditing) {
        const updatedAssignments = [...assignments];
        updatedAssignments[editIndex] = data;
        setAssignments(updatedAssignments);
        } else {
        setAssignments([...assignments, data]);
        }
        setShowForm(false);
    }

    return (
        <div>
            <div className="addAssignment">
                <h2>Add Assignment</h2>
                <p>Manually add your assignments by filling a form</p>
                <button onClick={handleAddClick}>Add Manually</button>
                {showForm && <AssignmentForm onSubmit={handleSubmit} initialData={initialData} isEditing={isEditing} />}
            </div>
            <ul>
                {assignments.map((assignment, index) => (
                <li key={index}>
                    <strong>{assignment.title}</strong> - {assignment.progress} - {assignment.deadline}
                    <div className='Assignment-buttons'>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
    };

    export default AssignmentTracker;
