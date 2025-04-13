// src/pages/HOD/HODDashboard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import HODSidebar from '../../components/HOD/HODSidebar';
import { Outlet } from 'react-router-dom';

const HODDashboard = () => {
  return (
    <div className="flex">
      <HODSidebar />
      
      <div className="flex-1 p-6">
        <Outlet />
      
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome HOD</h1>
      <div className="space-y-4">
        <Link to="/hod/face-verification" className="block p-4 bg-blue-500 text-white rounded">
          Face Verification
        </Link>
        <Link to="/hod/monitor-students" className="block p-4 bg-green-500 text-white rounded">
          Monitor Students
        </Link>
        <Link to="/hod/monitor-faculty" className="block p-4 bg-purple-500 text-white rounded">
          Monitor Faculty
        </Link>
        <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
    <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome HOD!</h1>
        <p>Select any option from Sidebar to Manage Students or Faculties.</p>
      </div>
    </div>    
      </div>
    </div></div>
    </div>
  );
};

export default HODDashboard;
