import Link from "next/link";
import React from "react";



function Logo() {
  return (
    <div>
      <Link
        href="/"
        className="font-semibold uppercase text-[2rem] font-poppins tracking-tighter cursor-pointer hover:text-primary hover:shadow-xl hover:drop-shadow-primary transition-all"
        aria-label={"logo"}>
        Check AI
      </Link>
    </div>
  );
}

export default Logo;
