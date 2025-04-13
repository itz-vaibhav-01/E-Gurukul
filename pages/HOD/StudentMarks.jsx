// src/pages/HOD/StudentMarks.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStudentMarks } from '../../api/hodApi';
import MarksTable from '../../components/HOD/MarksTable';

const StudentMarks = () => {
  const { id } = useParams(); // studentId
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const data = await getStudentMarks(id);
        setMarks(data.marks);
      } catch (error) {
        console.error('Failed to fetch marks', error);
      }
    };

    fetchMarks();
  }, [id]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Student Marks</h2>
      <MarksTable marks={marks} />
    </div>
  );
};

export default StudentMarks;
