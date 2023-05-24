import React from 'react';
import './Entry.css';

const Entry = ({ entry, deleteEntry, updateEntry }) => {
  const handleDelete = () => {
    deleteEntry(entry.id);
  };

  const handleUpdate = () => {
    // Perform the update operation here
    updateEntry(entry.id);
  };

  return (
    <div className="entry-container">
      <div className="entry-details">
        <p>Name: {entry.name}</p>
        <p>Class: {entry.class}</p>
        <p>Roll Number: {entry.rollNumber}</p>
        <p>Section: {entry.section}</p>
      </div>
      <div className="entry-actions">
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn btn-primary" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Entry;
