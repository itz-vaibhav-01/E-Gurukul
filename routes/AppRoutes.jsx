import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import StudentDashboard from '../pages/studentDashboard';
import Attendance from '../pages/Attendance';
import Marks from '../pages/Marks';
import Notification from '../pages/Notification';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student Routes */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/notifications" element={<Notification />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
