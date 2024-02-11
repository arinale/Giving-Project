import React, { useState } from "react";
import "./Registeration.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add logic to send the registration data to a server or perform other actions
    console.log("Registration data submitted:", formData);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      <form className="form-group" onSubmit={handleSubmit}>
        <label className="label">
          Username:
          <input
            className="input-field"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="label">
          Email:
          <input
            className="input-field"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="label">
          Password:
          <input
            className="input-field"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
