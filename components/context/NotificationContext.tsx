"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface NotificationContextType {
  message: string;
  showMessage: (msg: string) => void;
  hideMessage: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [message, setMessage] = useState<string>("");

  const showMessage = (msg: string) => {
    setMessage(msg);
    setTimeout(() => {
      hideMessage();
    }, 3000); // Hide message after 3 seconds
  };

  const hideMessage = () => {
    setMessage("");
  };

  return (
    <NotificationContext.Provider value={{ message, showMessage, hideMessage }}>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

export { NotificationProvider, useNotification };
