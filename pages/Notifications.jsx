import { useEffect, useState } from 'react';
import { getNotifications } from '../services/studentAPI';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const res = await getNotifications();
      setNotifications(res.data);
    };
    fetchNotifications();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      {notifications.map((note, index) => (
        <div key={index} className="border p-2 mb-2">
          {note.message}
        </div>
      ))}
    </div>
  );
};

export default Notification;
