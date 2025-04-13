// src/pages/HOD/ViewAllStudents.jsx

import { useEffect, useState } from 'react';
import { getAllStudents } from '../../api/hodApi';  // Correct API Path
import StudentTable from '../../components/HOD/StudentTable';  // Correct Component Path

const ViewAllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await getAllStudents(); // Assuming API Response { data: { students: [...] } }
        setStudents(res.data.students);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Students</h2>
      <StudentTable students={students} />
    </div>
  );
};

export default ViewAllStudents;
