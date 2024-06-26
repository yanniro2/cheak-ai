"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface NotificationContextType {
  message: string;
  showMessage: (msg: string) => void;
  hideMessage: () => void;
  handleClose: () => void;
  time: number;
  open: boolean;
  title: string;
  handleName: (name: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [time, setTime] = useState<number>(5);
  const [title, setTitle] = useState<string>("");

  const showMessage = (msg: string) => {
    setOpen((open) => !open);
    setMessage(msg);
    let timeLeft = 5; // Time in seconds
    const timer = setInterval(() => {
      timeLeft -= 1;
      if (timeLeft <= 0) {
        clearInterval(timer);
        handleClose();
      }
      setTime(() => timeLeft);
    }, 1000); // Update every second
  };

  const hideMessage = () => {
    setMessage("");
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleName = (name: string) => {
    setTitle((title) => name);
  };

  return (
    <NotificationContext.Provider
      value={{
        message,
        showMessage,
        hideMessage,
        handleClose,
        time,
        open,
        title,
        handleName,
      }}>
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
