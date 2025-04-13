import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HODDashboard from "./pages/HOD/hodDashboard";
import ViewAllStudents from "./pages/HOD/ViewAllStudents";
import ViewAllFaculties from "./pages/HOD/ViewAllFaculties";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hod/dashboard" element={<HODDashboard />} />
        <Route path="/hod/students" element={<ViewAllStudents />} />
        <Route path="/hod/faculties" element={<ViewAllFaculties />} />
      </Routes>
    </Router>
  );
}




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
