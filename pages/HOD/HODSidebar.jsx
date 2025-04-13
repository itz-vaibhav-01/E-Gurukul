// src/components/HOD/HODSidebar.jsx

import { Link } from 'react-router-dom';

const HODSidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">HOD Dashboard</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/hod/dashboard" className="hover:text-blue-400">Dashboard Home</Link>
        </li>
        <li>
          <Link to="/hod/students" className="hover:text-blue-400">View All Students</Link>
        </li>
        <li>
          <Link to="/hod/faculties" className="hover:text-blue-400">View All Faculties</Link>
        </li>
        <li>
          <Link to="/hod/face-recognition" className="hover:text-blue-400">Face Recognition</Link>
        </li>
      </ul>
    </div>
  );
};

export default HODSidebar;
