import React from 'react';
import './Notification.css'; // Make sure to create this CSS file for styling

const Notification = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="notification">
      <span>{message}</span>
      <button className="notification-close" onClick={onClose}>X</button>
    </div>
  );
};

export default Notification;
