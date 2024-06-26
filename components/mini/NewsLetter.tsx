"use client";
import React, { useState } from "react";

type Props = {};

const NewsLetter = (props: Props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("https://formkeep.com/f/cb370d9e61a6", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setEmail("");
          alert("Thank you for activate Newsletter");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className="flex py-2 flex-col gap-3">
      <label htmlFor="nemail" className="text-xl font-bold z-20">
        Subscribe to our Newsletter
      </label>
      <form
        className="flex items-center"
        onSubmit={handleSubmit}
        accept-charset="UTF-8"
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
  );
};

export default NewsLetter;
