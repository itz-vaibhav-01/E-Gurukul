import Attendance from '../../components/Faculty/Attendance';
import Marks from '../../components/Faculty/Marks';
import Notifications from '../../components/Faculty/Notifications';




const FacultyDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome, Faculty Member</h1>
      <div className="space-y-6"></div>
      <Attendance />
      <Marks />
      <Notifications />
    </div>
   
  );
};

export default FacultyDashboard;
