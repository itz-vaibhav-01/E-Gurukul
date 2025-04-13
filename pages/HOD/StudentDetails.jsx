// src/pages/HOD/StudentDetails.jsx

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStudentById } from "@/api/hodApi"; // Assuming you meant getStudentById here
// import StudentProfileCard from '@/components/HOD/StudentProfileCard'; // Uncomment if you're using this

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await getStudentById(id);
        setStudent(response.data || response); // support both .data or direct return
      } catch (error) {
        console.error("Failed to fetch student details:", error);
      }
    };

    fetchStudent();
  }, [id]);

  if (!student) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      {/* Basic Info */}
      <h2 className="text-2xl font-bold mb-4">Student Details</h2>
      <div className="bg-white p-4 rounded shadow mb-4">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Roll No:</strong> {student.rollNumber}</p>
        <p><strong>Department:</strong> {student.department}</p>
      </div>

      {/* Attendance */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Attendance</h3>
        {student.attendance?.length > 0 ? (
          <ul className="list-disc list-inside">
            {student.attendance.map((entry, index) => (
              <li key={index}>
                {entry.date}: {entry.status}
              </li>
            ))}
          </ul>
        ) : (
          <p>No attendance records available.</p>
        )}
      </div>

      {/* Marks */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Marks</h3>
        {student.marks?.length > 0 ? (
          <ul className="list-disc list-inside">
            {student.marks.map((mark, index) => (
              <li key={index}>
                {mark.subject}: {mark.score}
              </li>
            ))}
          </ul>
        ) : (
          <p>No marks data available.</p>
        )}
      </div>

      {/* Legacy or optional components below (preserved as comments) */}

      {/*
      <StudentProfileCard student={student} />
      
      const fetchData = async () => {
        const res = await getStudentDetails(id);
        setStudent(res);
      };
      */}

    </div>
  );
};

export default StudentDetails;
