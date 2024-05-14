import React from 'react'
import Image from "next/image";

import Link from "next/link";
// import { FaPhoneAlt } from "react-icons/bs";
// import { FaMapMarkerAlt } from "react-icons/gr";
// import { FaEnvelope } from "react-icons/io5";
import Services from "./Services";
import footerData from "@/data/footerData.json";
import headerData from "@/data/headerData.json";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "./mini/Logo";
type Props = {};

type ContactInformation = {
  // address: string;
  email: string;
  phone: string;
};

type Services = {
  title: string;
  link: string;
};

type additional_links = {
  title: string;
  url: string;
};

type SocialMedia = {
  facebook: {
    url: string;
    icon: string;
  };
  twitter: {
    url: string;
    icon: string;
  };
  instagram: {
    url: string;
    icon: string;
  };
  linkedin: {
    url: string;
    icon: string;
  };
};

type FooterData = {
  contactInformation: ContactInformation;
  services: Services[];
  socialMedia: SocialMedia;
  additional_links: additional_links[];
};

const Footer = (props: Props) => {
  const {
    contactInformation,
    services,
    socialMedia,
    additional_links,
  }: FooterData = footerData.footer;

  const currentYear = new Date().getFullYear(); // Get current year
  const getIconComponent = (iconName: string) => {
    const iconComponents: { [key: string]: React.ElementType } = {
      FaFacebook,
      FaTwitter,
      FaInstagram,
      FaLinkedin,
      // Add more icon components as needed
    };

    return iconComponents[iconName] || null;
  };
  return (
    <div
      className="w-screen bg-[#020513]  text-white font-lato lg:py-[3rem]  px-3 relative md:px-6 flex flex-col items-end justify-end "
      id="footer">
      <div className="container mx-auto p-3 lg:p-0 z-20 flex flex-col justify-between h-full ">
        <div className="flex   z-20 flex-col lg:flex-row w-full justify-between gap-8">
          <div className="flex flex-col w-1/2">
            <Logo />
            <p className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              nobis odio sed ipsum. Odit esse quos deserunt iusto ducimus rerum?
            </p>
            <div className="mt-[2rem] lg:pr-[1rem]">
              <h1 className="text-xl font-bold mb-2">Connect with Us</h1>
              <div className="flex items-center space-x-4">
                {Object.entries(socialMedia).map(
                  ([platform, { url, icon }]) => {
                    const IconComponent = getIconComponent(icon);
                    return (
                      <Link
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-1"
                        aria-label={"go to social media"}>
                        <IconComponent className="h-6 w-6" />
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          </div>

          <div className="flex items-start  md:justify-between flex-col md:flex-row lg:flex-row ">
            <div>
              <h1 className="text-xl font-bold lg:mb-4 mt-4 lg:mt-0">
                Primary Links
              </h1>
              <ul>
                {headerData.navigation.map((service, index) => (
                  <li key={index}>
                    <Link
                      href={service.url}
                      // target="_blank"
                      rel="noopener noreferrer"
                      className="link-1"
                      aria-label={service.label}>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Contact Information */}
          <div className="w-1/4">
            <h1 className="text-xl font-bold mb-4 z-20">Contact Information</h1>
            <Link
              href={`mailto:${contactInformation.email}`}
              className="flex items-center gap-3 ">
              <FaEnvelope className="link-active" /> {contactInformation.email}
            </Link>
            <Link
              href={`tel:${contactInformation.phone}`}
              className="flex items-center gap-3">
              <FaPhoneAlt className="link-active" />
              {contactInformation.phone}
            </Link>
          </div>
        </div>

        <hr className="my-6 border-primary shadow-primary z-20 shadow-text" />

        {/* Copyrights */}
        <div className="z-20 flex items-start lg:items-center justify-between flex-col lg:flex-row">
          <div className="flex gap-3 flex-col">
            <div className="uppercase flex items-start lg:items-center lg:gap-1 flex-col lg:flex-row gap-">
              Copyrights © {currentYear}{" "}
              <span className=" flex flex-col lg:flex-row lg:gap-1">
                <span className="font-bold font-poppins font-xl text-primary">
                  Check-ai
                </span>{" "}
                |<span className="uppercase font-light"></span>
              </span>
              All rights reserved
            </div>
            <div>
              Created by -{" "}
              <Link
                href="https://bento.me/niroyan"
                className="font-semibold transition-all ease-linear hover:text-orange hover:underline link-active"
                aria-label={"go to niroyan profile"}>
                Niroyan.K
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-3 text">
            <Link
              href="/Terms-and-conditions"
              className="link-bottom"
              aria-label={"Terms and Conditions"}>
              Terms and Conditions
            </Link>
            |
            <Link
              href="/privacy-policy"
              className="link-bottom"
              aria-label={"Privacy Policy"}>
              Privacy Policy
            </Link>
            |
            <Link
              href="/privacy-policy"
              className="link-bottom"
              aria-label={"Privacy Policy"}>
              Cookies Policies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer