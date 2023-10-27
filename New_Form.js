import React, { useState } from 'react';
 import "./New_form.css"
function MyForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
 
  // Event handler to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data here (e.g., submit to a server, perform validation, etc.)
    console.log('Form data:', formData);
    //return formData;
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };
 
  // Event handler to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
 
export default MyForm;