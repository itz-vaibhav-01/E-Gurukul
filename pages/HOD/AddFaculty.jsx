// src/pages/HOD/AddFaculty.jsx

import React, { useState } from "react";
import { addFaculty } from "../../api/hodApi";
import { useNavigate } from "react-router-dom";

const AddFaculty = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addFaculty(formData);
      alert("Faculty Added Successfully!");
      navigate("/hod/manage-faculty");
    } catch (error) {
      console.error("Error adding faculty:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Faculty</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-4 shadow rounded"
      >
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="border w-full px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border w-full px-3 py-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="border w-full px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add Faculty
        </button>
      </form>
    </div>
  );
};

export default AddFaculty;
