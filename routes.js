import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// HOD Pages
import HODDashboard from "./pages/HOD/HODDashboard";
import FaceRecognition from "./pages/HOD/FaceRecognition";
import MonitorStudents from "./pages/HOD/MonitorStudents";
import MonitorFaculty from "./pages/HOD/MonitorFaculty";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* HOD Routes */}
        <Route path="/hod/dashboard" element={<HODDashboard />} />
        <Route path="/hod/face-verification" element={<FaceRecognition />} />
        <Route path="/hod/monitor-students" element={<MonitorStudents />} />
        <Route path="/hod/monitor-faculty" element={<MonitorFaculty />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
