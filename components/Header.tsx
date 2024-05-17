"use client";
import React, { useEffect, useState } from "react";
import navigationData from "@/data/headerData.json";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "./mini/Logo";
import Hover from "./mini/Hover";
import {
  FaHome,
  FaInfoCircle,
  FaConciergeBell,
  FaGift,
  FaCog,
  FaThumbsUp,
  FaQuestionCircle,
  FaEnvelope,
} from "react-icons/fa";

type NavigationItem = {
  id: string;
  label: string;
  url: string;
  icon: string;
  submenu?: NavigationItem[];
};

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let [activeSection, setActiveSection] = useState<string>("home");
  // let links = navigationData.navigation.map((section) => section.id);

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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navigationData.navigation.forEach((section) => {
      let target = document.getElementById(section.id);
      target && observer.observe(target);
    });
  }, []);

  return (
    <div
      className={` ${
        isSticky
          ? "backdrop-blur-lg   bg-darkBlue text-white  shadow-lg   drop-shadow-lg  border-gray-100 bg-opacity-90 border-b border-primary "
          : "bg-none  backdrop-blur-lg   bg-darkBlue text-white  shadow-lg   drop-shadow-lg  border-gray-100 bg-opacity-90 border-b border-primary  md:border-none"
      } w-screen h-min  text-white fixed top-0 left-0 right-0 z-[3000] py-2 `}>
      <div className="container mx-auto flex items-center px-3 justify-between">
        <nav className="w-full flex items-center justify-between">
          <Logo />

          <ul className="w-max items-center justify-evenly hidden md:flex md:flex gap-5 ">
            {navigationData.navigation.map(
              (item: NavigationItem, index: number) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    className={`  cursor-pointer text-[14px] ${
                      activeSection == item.id ? "link-active" : "link-1"
                    }`}
                    aria-label={item.label}>
                    {activeSection == item.id ? (
                      `[ ${item.label} ]`
                    ) : (
                      <Hover name={item.label} />
                    )}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="hidden md:flex">
            <Link href="/" className="btn btn-2">
              get started!
            </Link>
          </div>

          <div className="md:hidden md:hidden">
            <button
              className={`text-[1.5rem] cursor-pointer hover:text-primary transition-all ${
                isMobileMenuOpen ? "text-orange" : "text-gray-200"
              }`}
              onClick={toggleMobileMenu}
              aria-label="button">
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </nav>
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-[4rem] left-0 right-0 w-screen h-screen z-[5000] flex flex-col   p-3  bg-dark justify-around text-center  items-center pb-[4rem] ">
            {navigationData.navigation.map(
              (item: NavigationItem, index: number) => (
                <Link
                  key={index}
                  href={item.url}
                  className={` w-full bg-lighDark p-3   cursor-pointer text-[1.4rem] transition-all ease-in-out flex items-center justify-center gap-3 ${
                    activeSection == item.id
                      ? "bg-white text-primary font-semibold"
                      : "hover:bg-white hover:text-primary "
                  }`}
                  aria-label={item.label}
                  onClick={toggleMobileMenu}>
                  {renderIcon(item.icon)}
                  {item.label}
                </Link>
              )
            )}

            <hr className="border-lighDark border w-full" />
            <div className="flex md:hidden w-full">
              <Link
                href="/"
                className="text-white w-full bg-primary p-3   cursor-pointer text-[1.5rem] transition-all ease-in-out uppercase font-semibold">
                get started
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const renderIcon = (iconName: string) => {
  const iconComponents: { [key: string]: React.ElementType } = {
    FaHome,
    FaInfoCircle,
    FaConciergeBell,
    FaGift,
    FaCog,
    FaThumbsUp,
    FaQuestionCircle,
    FaEnvelope,
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

export default Header;
