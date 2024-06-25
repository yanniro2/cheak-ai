import React from "react";

type Props = {};

const NewsLetter = (props: Props) => {
  return (
    <div className="flex py-2 flex-col gap-3">
      <label htmlFor="nemail" className="text-xl font-bold z-20">
        Subscribe to our Newsletter
      </label>
      <form
        className="flex items-center"
        action="https://formkeep.com/f/cb370d9e61a6"
        accept-charset="UTF-8"
        encType="multipart/form-data"
        method="POST">
        <input
          placeholder="Email Address"
          className="input-l"
          type="email"
          id="email"
          name="email"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
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
