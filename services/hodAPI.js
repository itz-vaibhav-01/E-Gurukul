// src/services/hodAPI.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/hod';  // your backend URL


const API = axios.create({ baseURL: 'http://localhost:5000/api' });


export const getAllStudents = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/students`);
    return res.data;
  } catch (error) {
    console.error('Error fetching students', error);
    throw error;
  }
};
export const getAllFaculties = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/faculties`);
      return res.data;
    } catch (error) {
      console.error('Error fetching faculties', error);
      throw error;
    }
  };
  // src/services/hodAPI.js

export const getStudentById = async (studentId) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/student/${studentId}`);
      return res.data;
    } catch (error) {
      console.error('Error fetching student details', error);
      throw error;
    }
  };
// src/services/hodAPI.js

export const getFacultyById = async (facultyId) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/faculty/${facultyId}`);
      return res.data;
    } catch (error) {
      console.error('Error fetching faculty details', error);
      throw error;
    }
  };
// src/services/hodAPI.js  

// Get All Faculties

// Add Faculty
export const addFaculty = (facultyData) => API.post('/faculty', facultyData);

// Delete Faculty
export const deleteFaculty = (facultyId) => API.delete(`/faculty/${facultyId}`);

// Get All Students

// Add Student
export const addStudent = (studentData) => API.post('/student', studentData);

// Delete Student
export const deleteStudent = (studentId) => API.delete(`/student/${studentId}`);
