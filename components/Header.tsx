"use client";
import React, { useEffect, useState } from "react";
import navigationData from "@/data/headerData.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

type NavigationItem = {
  label: string;
  url: string;
  submenu?: NavigationItem[];
};

const Header: React.FC = () => {
  const pathName = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 50; // Adjust this value based on your design
      setIsSticky(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={` ${
        isSticky
          ? "backdrop-blur-lg   bg-darkBlue text-white  shadow-lg py-1 drop-shadow-lg border-b border-gray-100 bg-opacity-90 "
          : "bg-none py-[1rem] "
      } w-screen h-min  text-white fixed top-0 left-0 right-0 z-[3000] animate__animated animate__fadeInDown`}>
      <div className="container mx-auto flex items-center px-3 justify-between">
        <nav className="w-full flex items-center justify-between">
          <Link href="/">
            {/* <Image
              src="/assets/img/logo.png"
              width="250"
              height="32"
              alt="logo img"
              aria-label={"go to logo"}
              // className="w-full h-full object-contain"
            /> */}
            logo
          </Link>

          <ul className="w-1/2 items-center justify-evenly hidden lg:flex md:flex animate__animated animate__fadeInDown">
            {navigationData.navigation.map(
              (item: NavigationItem, index: number) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className={`${
                      (pathName === item.url && pathName !== "/") ||
                      (pathName.startsWith(item.url) && item.url !== "/") ||
                      (pathName === "/" && item.url === "/")
                        ? "link-active"
                        : "link-2"
                    }`}
                    aria-label={item.label}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <Link href="/"> get started</Link>

          <div className="lg:hidden md:hidden">
            <button
              className={`   text-[1.5rem] cursor-pointer hover:text-primary transition-all ${
                isMobileMenuOpen ? "text-orange" : "text-gray-200"
              }`}
              onClick={toggleMobileMenu}
              aria-label="button">
              {/* Hamburger icon */}
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-[4rem] left-0 right-0 w-screen h-max z-[5000] flex flex-col gap-3  p-3 backdrop-blur-md backdrop-brightness-50 bg-darkBlue shadow-lg ">
            {navigationData.navigation.map(
              (item: NavigationItem, index: number) => (
                <Link
                  key={index}
                  href={item.url}
                  className={`${
                    (pathName === item.url && pathName !== "/") ||
                    (pathName.startsWith(item.url) && item.url !== "/") ||
                    (pathName === "/" && item.url === "/")
                      ? "link-active z-[5005]"
                      : "link-2 z-[5005]"
                  }`}
                  aria-label={item.label}
                  onClick={toggleMobileMenu}>
                  {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
