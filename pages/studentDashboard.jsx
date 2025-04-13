import { Link } from 'react-router-dom';
import Attendance from '../../components/Student/Attendance';
import Marks from '../../components/Student/Marks';
import Notifications from '../../components/Student/Notifications';


const StudentDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome, Student</h1>
      <div className="space-y-6">
        <Attendance />
        <Marks />
        <Notifications />
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-4">
        <Link to="/attendance" className="bg-blue-500 text-white p-3 rounded">View Attendance</Link>
        <Link to="/marks" className="bg-green-500 text-white p-3 rounded">View Marks</Link>
        <Link to="/notifications" className="bg-purple-500 text-white p-3 rounded">View Notifications</Link>
      </div>
    </div> </div>
    </div>
  );
};

export default StudentDashboard;
