import React, { useState } from 'react';
import './css/bootstrap.css';
import './App.css';

function ClientForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // You can send the data to your server or perform other actions here.
  };

  return (
    <div>
      <h2 class="heading_2">Client Form</h2>
      <form onSubmit={handleSubmit}>
        <div class="form-groupo">
          <label htmlFor="firstName">First Name:</label>
          <input
          class="form-control"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div class="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
          class="form-control"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div class="form-group">
          <label htmlFor="email">Email:</label>
          <input
          class="form-control"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      
    </div>
  );
}

export default ClientForm;
