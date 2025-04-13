// src/pages/HOD/ManageFaculty.jsx

import React, { useEffect, useState } from 'react';
import { getAllFaculties, addFaculty, deleteFaculty } from '../../api/hodApi';
import FacultyTable from '../../components/HOD/FacultyTable';
import FacultyForm from '../../components/HOD/FacultyForm';
import { getAllFaculties, addFaculty, deleteFaculty } from '@/services/hodAPI';

function ManageFaculty() {
  const [faculties, setFaculties] = useState([]);
  const [error, setError] = useState('');

  const fetchFaculties = async () => {
    try {
      const data = await getAllFaculties();
      setFaculties(data.faculties);
    } catch (err) {
      setError('Failed to fetch faculty data');
    }
  };

  useEffect(() => {
    fetchFaculties();
  }, []);

  const handleAddFaculty = async (facultyData) => {
    try {
      await addFaculty(facultyData);
      alert('Faculty added successfully!');
      fetchFaculties();
    } catch (err) {
      setError('Failed to add faculty member');
    }
  };

  const handleDeleteFaculty = async (facultyId) => {
    try {
      await deleteFaculty(facultyId);
      alert('Faculty deleted successfully!');
      fetchFaculties();
    } catch (err) {
      setError('Failed to delete faculty member');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Faculty</h2>

      {error && <p className="text-red-500">{error}</p>}

      <FacultyForm onSubmit={handleAddFaculty} />

      <div className="mt-6">
        <FacultyTable faculties={faculties} onDelete={handleDeleteFaculty} />
      </div>
    </div>
  );
}
const ManageFaculty = () => {
  const [faculties, setFaculties] = useState([]);
  const [newFaculty, setNewFaculty] = useState({ name: '', email: '', department: '' });

  useEffect(() => {
    fetchFaculties();
  }, []);

  const fetchFaculties = async () => {
    const res = await getAllFaculties();
    setFaculties(res.data);
  };

  const handleAddFaculty = async () => {
    await addFaculty(newFaculty);
    fetchFaculties();
  };

  const handleDeleteFaculty = async (id) => {
    await deleteFaculty(id);
    fetchFaculties();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Faculties</h2>

      {/* Add Faculty Form */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newFaculty.name}
          onChange={(e) => setNewFaculty({ ...newFaculty, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newFaculty.email}
          onChange={(e) => setNewFaculty({ ...newFaculty, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Department"
          value={newFaculty.department}
          onChange={(e) => setNewFaculty({ ...newFaculty, department: e.target.value })}
        />
        <button onClick={handleAddFaculty}>Add Faculty</button>
      </div>

      {/* Faculty List */}
      {faculties.map((faculty) => (
        <div key={faculty._id} className="border p-2 mb-2">
          <h3>{faculty.name}</h3>
          <p>{faculty.email}</p>
          <p>{faculty.department}</p>

          <button
            onClick={() => handleDeleteFaculty(faculty._id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageFaculty;
