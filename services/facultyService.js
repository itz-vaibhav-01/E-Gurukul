// src/services/facultyService.js

import axios from 'axios';

// Upload Attendance API Call
export const uploadAttendance = async (attendanceData, token) => {
  const res = await axios.post(
    '/api/faculty/upload-attendance',
    attendanceData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

// Upload Marks API Call
export const uploadMarks = async (marksData, token) => {
  const res = await axios.post(
    '/api/faculty/upload-marks',
    marksData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

// Delete Marks API Call
export const deleteMarks = async (marksId, token) => {
  const res = await axios.delete(
    `/api/faculty/delete-marks/${marksId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};

// Add Subject Teacher API Call
export const addSubjectTeacher = async (teacherData, token) => {
  const res = await axios.post(
    '/api/faculty/add-subject-teacher',
    teacherData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res.data;
};
