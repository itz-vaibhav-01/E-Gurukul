// src/pages/HOD/ViewAllFaculties.jsx

import React, { useEffect, useState } from 'react';
import { getAllFaculties } from '../../api/hodApi';  // Correct API Path
import FacultyTable from '../../components/HOD/FacultyTable';  // Correct Component Path

const ViewAllFaculties = () => {
  const [faculties, setFaculties] = useState([]);

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const res = await getAllFaculties(); // Assuming API Response { data: { faculties: [...] } }
        setFaculties(res.data.faculties);
      } catch (error) {
        console.error('Error fetching faculties:', error);
      }
    };

    fetchFaculties();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Faculties</h2>
      <FacultyTable faculties={faculties} />
    </div>
  );
};

export default ViewAllFaculties;
