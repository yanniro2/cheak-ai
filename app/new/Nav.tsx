import React from "react";

interface Links {
  links: string[];
  activeSection: string;
}

function Nav({ links, activeSection }: Links) {
  return (
    <div className="w-full py-5 fixed flex flex-row items-center justify-center bg-gray-200">
      {links.map((link, index) => (
        <span
          key={index}
          className={`px-5 cursor-pointer ${
            activeSection == link && "text-orange-500"
          }`}>
          {link}
        </span>
      ))}
    </div>
  );
}

export default Nav;
