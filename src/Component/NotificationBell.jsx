import React, { useState } from 'react';
import Notification from './Notification'; // Adjust path if needed
// import './NotificationBell.css'; // Create this CSS file for styling

const NotificationBell = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("You have a new notification!");

  const toggleNotification = () => {
    setNotificationVisible(!notificationVisible);
  };

  const handleCloseNotification = () => {
    setNotificationVisible(false);
  };

  return (
    <div className="notification-bell">
      <button className="bell-button" onClick={toggleNotification}>
        <i className="fas fa-bell"></i>
      </button>
      <Notification
        message={notificationMessage}
        isVisible={notificationVisible}
        onClose={handleCloseNotification}
      />
    </div>
  );
};

export default NotificationBell;
