"use client";
import { FaRegFaceSadTear } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full  h-screen flex items-center justify-center p-4  text-white">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 lg:w-auto w-full flex items-center justify-center text-primary gap-5">
            Ops <FaRegFaceSadTear />
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 ">
            Page {pathname} not found (404)!
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-red-500">
            Could not find requested ,
          </p>
          <p className="capitalize gap-1 flex items-center">
            go home click here
            <Link
              href="/"
              className="text-primary underline uppercase font-semibold"
              aria-label={"go home"}>
              home
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
