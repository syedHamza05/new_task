import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    rollNumber: '',
    section: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Insert the form data into the database here
    console.log('Form submitted:', formData);
    // Reset the form fields
    setFormData({
      name: '',
      class: '',
      rollNumber: '',
      section: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="class">Class:</label>
        <input
          type="text"
          name="class"
          id="class"
          value={formData.class}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="rollNumber">Roll Number:</label>
        <input
          type="text"
          name="rollNumber"
          id="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="section">Section:</label>
        <input
          type="text"
          name="section"
          id="section"
          value={formData.section}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default Form;
