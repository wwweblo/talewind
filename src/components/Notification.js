"use client";

import React, { useState } from "react";

const Notification = ({ type, title, message }) => {
  // Классы для стилей уведомлений
  const baseStyle =
    "w-80 p-4 rounded-md shadow-lg text-white flex items-start space-x-4 mb-4";
  const iconStyle = "w-6 h-6 flex-shrink-0 rounded-full flex items-center justify-center";

  const styles = {
    error: {
      container: `${baseStyle} bg-red-500`,
      icon: `${iconStyle} bg-red-600`,
      iconContent: "❗",
    },
    success: {
      container: `${baseStyle} bg-green-500`,
      icon: `${iconStyle} bg-green-600`,
      iconContent: "✔️",
    },
    info: {
      container: `${baseStyle} bg-blue-500`,
      icon: `${iconStyle} bg-blue-600`,
      iconContent: "ℹ️",
    },
  };

  const { container, icon, iconContent } = styles[type] || styles.info;

  return (
    <div className={container}>
      <div className={icon}>{iconContent}</div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm">{message}</p>
      </div>
    </div>
  );
};

export const NotificationsContainer = ({ notifications }) => {
  const [visibleNotifications, setVisibleNotifications] = useState(notifications);

  // Удаление уведомления через несколько секунд
  const handleRemove = (index) => {
    setVisibleNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  React.useEffect(() => {
    const timeouts = visibleNotifications.map((_, index) =>
      setTimeout(() => handleRemove(index), 5000) // Автоматическое удаление через 5 секунд
    );
    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [visibleNotifications]);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2">
      {visibleNotifications.map((notification, index) => (
        <Notification
          key={index}
          type={notification.type}
          title={notification.title}
          message={notification.message}
        />
      ))}
    </div>
  );
};
