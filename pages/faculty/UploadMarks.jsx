// src/pages/faculty/UploadMarks.jsx
import { useState } from 'react';
import { uploadMarks } from '../../services/facultyService';

const UploadMarks = () => {
  const [studentId, setStudentId] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');

  const handleUpload = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await uploadMarks({ studentId, subject, marks }, token);
      alert(response.message);
    } catch (error) {
      console.log(error);
      alert('Failed to Upload Marks');
    }
  };

  return (
    <div>
      <h2>Upload Marks</h2>
      <input placeholder="Student ID" onChange={(e) => setStudentId(e.target.value)} />
      <input placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
      <input placeholder="Marks" onChange={(e) => setMarks(e.target.value)} />
      <button onClick={handleUpload}>Upload Marks</button>
    </div>
  );
};

export default UploadMarks;
// src/pages/faculty/ManageMarks.jsx has been moved to a separate file.
