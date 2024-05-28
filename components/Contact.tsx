import React from "react";
import Title1 from "./mini/Title";
import Link from "next/link";
import contactData from "@/data/contactData.json";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Scroll from "./animation/Scroll";
import { ContactDetails } from "@/types";

const Contact = () => {
  return (
    <section
      className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow"
      id="contact">
      {/* <Scroll> */}
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] md:py-[4rem] pt-[6rem]">
        <Title1 title={"Contact Us"} subtitle={"Get in Touch"} />
        <div className="w-full h-full flex lg:flex-row flex-col items-center justify-between gap-[3rem] ">
          <div className="lg:w-1/2  flex flex-col  rounded gap-[1rem]">
            <Scroll className="h1 text-primary">Contact Details</Scroll>
            <Scroll className="text">
              Feel free to reach out to us using the contact details below. We
              are here to assist you with any inquiries or assistance you may
              need. Whether it&rsquo;s a question, feedback, or collaboration
              opportunity, we&rsquo;re just a message away!
            </Scroll>

            <div className="md:w-1/2 w-full flex flex-col gap-[1rem] items-start">
              {Object.keys(contactData.contactDetails).map((key, index) => (
                <Scroll
                  key={index}
                  className="flex justify-between bg-lighDark w-full p-[1rem] rounded items-center text-left">
                  <Link
                    className="icons-1 w-1/4"
                    href={
                      contactData.contactDetails[key as keyof ContactDetails]
                        .href
                    }>
                    {renderIcon(
                      contactData.contactDetails[key as keyof ContactDetails]
                        .icon
                    )}
                  </Link>
                  <div className="flex items-start flex-col text-left w-3/4">
                    <p className="font-light font-poppins text-primary">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </p>
                    <p className="font-open font-semibold">
                      {
                        contactData.contactDetails[key as keyof ContactDetails]
                          .text
                      }
                    </p>
                  </div>
                </Scroll>
              ))}
            </div>
            <Scroll className="pt-[2rem]">
              <h4 className="text-xl font-poppins font-semibold">
                Social Media
              </h4>
              <div className="flex gap-[1rem] mt-4 items-center">
                {contactData.socialMedia.map((social, index) => (
                  <Link
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icons-3 ">
                    {renderIcon(social.icon)}
                  </Link>
                ))}
              </div>
            </Scroll>
          </div>
          <div className="lg:w-1/2 w-full  items-start  flex flex-col justify-between gap-[1rem]">
            <Scroll className="text-[2rem] font-poppins font-semibold uppercase">
              Add your details
            </Scroll>
            <form className="flex flex-col w-full gap-[1rem]">
              <Scroll className="box-1">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="input"
                  placeholder="First name"
                />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="input"
                  placeholder="Last name"
                />
              </Scroll>
              <Scroll className="box-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="Email address"
                />
              </Scroll>
              <Scroll className="box-2">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="input"
                  placeholder="Phone number"
                />
              </Scroll>
              <Scroll className="box-2">
                <select id="services" name="services" className="input">
                  <option value="">Select a service</option>
                  <option value="Service 1">Service 1</option>
                  <option value="Service 2">Service 2</option>
                  <option value="Service 3">Service 3</option>
                  {/* Add more options as needed */}
                </select>
              </Scroll>
              <Scroll>
                <textarea
                  id="message"
                  name="message"
                  className="input"
                  placeholder="Message"></textarea>
              </Scroll>

              <Scroll className="box-3">
                <input type="checkbox" id="terms" name="terms" />
                <label
                  htmlFor="terms"
                  className="text-primary flex gap-1 flex-wrap ">
                  I agree to the
                  <Link href="/" className="link-2">
                    terms of use
                  </Link>
                  and
                  <Link href="/" className="link-2">
                    privacy policy
                  </Link>
                </label>
              </Scroll>

              <div className="box-2 input">I’m not robot</div>

              <button type="submit" className="btn btn-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* </Scroll> */}
    </section>
  );
};

const renderIcon = (iconName: string) => {
  const iconComponents: { [key: string]: React.ElementType } = {
    FaPhone,
    FaEnvelope,
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent />;
};

export default Contact;
