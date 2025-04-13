import { useEffect, useState } from 'react';
import { getMarks } from '../services/studentAPI';

const Marks = () => {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    const fetchMarks = async () => {
      const studentId = localStorage.getItem('studentId');
      const res = await getMarks(studentId);
      setMarks(res.data);
    };
    fetchMarks();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Marks Details</h2>
      {marks.map((item, index) => (
        <div key={index} className="border p-2 mb-2">
          Subject: {item.subject} | Marks: {item.marks}
        </div>
      ))}
    </div>
  );
};

export default Marks;
