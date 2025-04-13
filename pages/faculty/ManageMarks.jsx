// src/pages/faculty/ManageMarks.jsx
import { useState } from 'react';
import { deleteMarks } from '../../services/facultyService';

const ManageMarks = () => {
  const [marksId, setMarksId] = useState('');

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await deleteMarks(marksId, token);
      alert(response.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Delete Marks</h2>
      <input placeholder="Marks ID" onChange={(e) => setMarksId(e.target.value)} />
      <button onClick={handleDelete}>Delete Marks</button>
    </div>
  );
};

export default ManageMarks;
