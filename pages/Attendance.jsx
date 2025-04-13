import { useEffect, useState } from 'react';
import { getAttendance } from '../services/studentAPI';

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      const studentId = localStorage.getItem('studentId');
      const res = await getAttendance(studentId);
      setAttendance(res.data);
    };
    fetchAttendance();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Attendance Details</h2>
      {attendance.map((item, index) => (
        <div key={index} className="border p-2 mb-2">
          Subject: {item.subject} | Attendance: {item.percentage}%
        </div>
      ))}
    </div>
  );
};

export default Attendance;
