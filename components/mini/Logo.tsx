import Link from "next/link";
import React from "react";

type Props = {};

function Logo({}: Props) {
  return (
    <div>
      <Link
        href="/"
        className="font-semibold uppercase text-[2rem] font-poppins tracking-tighter cursor-pointer hover:text-primary hover:shadow-xl hover:drop-shadow-primary transition-all">
        Check AI
      </Link>
    </div>
  );
}

export default Logo;
