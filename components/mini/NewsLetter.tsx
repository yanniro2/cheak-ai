"use client";
import React, { useState } from "react";
import Notifications from "./Notifications";
import { useNotification } from "../context/NotificationContext";

type Props = {};

const NewsLetter = (props: Props) => {
  const [email, setEmail] = useState("");
  const { showMessage, handleName } = useNotification();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    showMessage: (msg: string) => void
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    handleName("Newsletter");

    try {
      const response = await fetch("https://formkeep.com/f/cb370d9e61a6", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setEmail("");
        showMessage("Thank you for subscribing to the newsletter");
      } else {
        console.error("Failed to submit the form:", response.statusText);
        showMessage(
          "There was an issue with your submission. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showMessage(
        "An error occurred while submitting the form. Please try again."
      );
    }
  };

  return (
    <>
      <div className="flex py-2 flex-col gap-3">
        <label htmlFor="nemail" className="text-xl font-bold z-20">
          Subscribe to our Newsletter
        </label>
        <form
          className="flex items-center"
          onSubmit={(e) => handleSubmit(e, showMessage)}
          acceptCharset="UTF-8"
          encType="multipart/form-data">
          <input
            placeholder="Email Address"
            className="input-l"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            required
          />
          <button
            className="border-primary bg-primary py-4 px-6 flex items-center justify-center border rounded-r font-poppins uppercase"
            type="submit"
            title="submitbtn">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default NewsLetter;
