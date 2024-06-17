import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

type Props = {
  message: string | null;
  handleClose: () => void;
  time: number;
  title: string;
};

const Notifications: React.FC<Props> = ({
  message,
  handleClose,
  title,
  time,
}) => {
  return (
    <div className="fixed z-[9999] backdrop-blur-md  md:w-[20rem] h-auto bg-dark  drop-shadow shadow-xl  md:left-[6%] bottom-5   border  text-white border-primary rounded w-full left-0">
      <div className="w-full flex items-center justify-between p-3 h2 ">
        <div className="step-h1">{title}</div>

        <button
          onClick={handleClose}
          className="text-white hover:text-orange transition-all">
          {/* Close button triggers the onClose callback */}
          <IoIosCloseCircle />
        </button>
      </div>
      <div className="p-3 w-full h-full items-center justify-center text-center bg-lighDark text-darkBlue flex flex-col">
        <div className="text font-light capitalize">
          automatic close with in
          <h1 className="h1 text-primary">{time}</h1>
        </div>

        <h1 className="font-normal font-roboto">{message} </h1>
      </div>
    </div>
  );
};

export default Notifications;
