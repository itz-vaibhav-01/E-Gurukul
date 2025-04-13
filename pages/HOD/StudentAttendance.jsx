import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentAttendance } from "../../api/hodApi";
import AttendanceTable from "../../components/HOD/AttendanceTable";

const StudentAttendance = () => {
  const { id } = useParams(); // studentId
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const data = await getStudentAttendance(id);
        setAttendance(data.attendance);
      } catch (error) {
        console.error("Failed to fetch attendance", error);
      }
    };

    fetchAttendance();
  }, [id]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Student Attendance</h2>
      <AttendanceTable attendance={attendance} />
    </div>
  );
};

export default StudentAttendance;
