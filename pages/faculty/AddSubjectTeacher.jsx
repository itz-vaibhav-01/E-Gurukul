// src/pages/faculty/AddSubjectTeacher.jsx
import { useState } from 'react';
import { addSubjectTeacher } from '../../services/facultyService';

const AddSubjectTeacher = () => {
  const [teacher, setTeacher] = useState({
    name: '',
    subject: '',
    email: '',
  });

  const handleAddTeacher = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await addSubjectTeacher(teacher, token);
      alert(response.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Subject Teacher</h2>
      <input placeholder="Name" onChange={(e) => setTeacher({ ...teacher, name: e.target.value })} />
      <input placeholder="Subject" onChange={(e) => setTeacher({ ...teacher, subject: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setTeacher({ ...teacher, email: e.target.value })} />
      <button onClick={handleAddTeacher}>Add Teacher</button>
    </div>
  );
};

export default AddSubjectTeacher;
