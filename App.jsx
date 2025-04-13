import Navbar from './components/Navbar';
import AppRoutes from './routes';  // Only one correct import
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HODDashboard from './pages/HOD/hodDashboardDashboard';
import ViewAllStudents from './pages/HOD/ViewAllStudents';
import ViewAllFaculties from './pages/HOD/ViewAllFaculties';
import FaceRecognition from './pages/HOD/FaceRecognition';
// src/App.jsx or your routing file

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentMarks from './pages/HOD/StudentMarks';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Guest/Home';
import About from './pages/Guest/About';
import Courses from './pages/Guest/Courses';
import FeeStructure from './pages/Guest/FeeStructure';
import Contact from './pages/Guest/Contact';

import MainLayout from "./layouts/MainLayout";

<><Routes>
  <Route path="/" element={<MainLayout><Home /></MainLayout>} />
  <Route path="/about" element={<MainLayout><About /></MainLayout>} />
  <Route path="/courses" element={<MainLayout><Courses /></MainLayout>} />
  <Route path="/fees" element={<MainLayout><FeeStructure /></MainLayout>} />
  <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
  {/* Dashboards can use a separate layout if needed */}
</Routes><><Routes>
  {/* Guest/Public Pages */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/fees" element={<FeeStructure />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
  // Inside your Routes component
    <>
  // Inside your Routes component
      <>
  // Inside your Routes component
        <Routes>
          {/* Other routes */}
          <Route path="/hod/student/:id/marks" element={<StudentMarks />} />
        </Routes><><><><>
          <Route path="/hod/student/:id" element={<StudentDetails />} />
          <Route path="/hod/faculty/:id" element={<FacultyDetails />} /></> // src/App.jsx or src/routes/HODRoutes.jsx
          // src/App.jsx or src/routes/HODRoutes.jsx
          // src/App.jsx or src/routes/HODRoutes.jsx
          // src/App.jsx or src/routes/HODRoutes.jsx
          // src/App.jsx or src/routes/HODRoutes.jsx
          // src/App.jsx or src/routes/HODRoutes.jsx
          // src/App.jsx or src/routes/HODRoutes.jsx
          <Route path="/hod/faculty/:id" element={<FacultyDetails />} /></>
  // src/App.jsx or src/routes/HODRoutes.jsx
          <Route path="/hod/students" element={<ViewAllStudents />} />
          <Route path="/hod/student/:id" element={<StudentDetails />} /></>
          <Route path="/hod/student/:id/attendance" element={<StudentAttendance />} /></></>
          <Route path="/hod/manage-faculty" element={<ManageFaculty />} />
          <Route path="/hod/add-faculty" element={<AddFaculty />} />
          </></></>
  
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hod" element={<HODDashboard />}>
          <Route path="dashboard" element={<h1>Welcome HOD Dashboard</h1>} />
          <Route path="students" element={<ViewAllStudents />} />
          <Route path="faculties" element={<ViewAllFaculties />} />
          <Route path="face-recognition" element={<FaceRecognition />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;
