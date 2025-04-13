import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api/student',
});

// Get Attendance
export const getAttendance = (id) => API.get(`/attendance/${id}`);

// Get Marks
export const getMarks = (id) => API.get(`/marks/${id}`);

// Get Notifications
export const getNotifications = () => API.get(`/notifications`);
