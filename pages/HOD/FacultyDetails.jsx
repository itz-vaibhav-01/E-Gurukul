// src/pages/HOD/FacultyDetails.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFacultyById } from '../../api/hodApi'; // Adjust path if needed

const FacultyDetails = () => {
  const { id } = useParams();
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await getFacultyById(id);
        setFaculty(response.data?.faculty || response.data || response); // handle different response structures
      } catch (error) {
        console.error('Error fetching faculty details:', error);
      }
    };

    fetchFaculty();
  }, [id]);

  if (!faculty) return <div className="p-4">Loading faculty details...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Faculty Details</h1>
      <div className="space-y-2">
        <p><strong>Name:</strong> {faculty.name}</p>
        <p><strong>Email:</strong> {faculty.email}</p>
        <p><strong>Department:</strong> {faculty.department}</p>
        <p><strong>Phone:</strong> {faculty.phone}</p>
        <p><strong>Subjects:</strong> {faculty.subjects?.join(', ') || 'N/A'}</p>
        {/* Add more fields if necessary */}
      </div>
    </div>
  );
};

export default FacultyDetails;
