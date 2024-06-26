"use client";
import React, { useState } from "react";
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
import { useNotification } from "./context/NotificationContext";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    description: "",
    service: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { showMessage, handleName } = useNotification();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    // Validate the changed field
    let errorMessage = "";
    switch (name) {
      case "fname":
        errorMessage = value.trim() === "" ? "FirstName is required" : "";
        break;
      case "lname":
        errorMessage = value.trim() === "" ? "LastName is required" : "";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        errorMessage = emailRegex.test(value)
          ? ""
          : "Please enter a valid email address";
        break;
      case "phoneNumber":
        const phoneRegex =
          /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g;
        errorMessage = phoneRegex.test(value)
          ? ""
          : "Please enter a valid phone number";
        break;
      default:
        break;
    }

    // Update the error state
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const handleReset = () => {
    setFormValues({
      fname: "",
      lname: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      description: "",
      service: "",
    });
    setErrors({});
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    showMessage: (msg: string) => void
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    handleName("Contact Form");

    try {
      const response = await fetch("https://formkeep.com/f/cb370d9e61a6", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        handleReset(); // Clear the form values
        showMessage(
          "Thank you for contacting us. We will get back to you shortly."
        );
      } else {
        console.error("Failed to submit the form:", response.statusText);
        showMessage(
          "There was an issue with your submission. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      showMessage(
        "An error occurred while submitting the form. Please try again."
      );
    }
  };

  return (
    <>
      <section
        className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow"
        id="contact">
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
                      }
                      aria-label={"social"}>
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
                          contactData.contactDetails[
                            key as keyof ContactDetails
                          ].text
                        }
                      </p>
                    </div>
                  </Scroll>
                ))}
              </div>
              <Scroll className="pt-[2rem]">
                <h3 className="text-xl font-poppins font-semibold">
                  Social Media
                </h3>
                <div className="flex gap-[1rem] mt-4 items-center">
                  {contactData.socialMedia.map((social, index) => (
                    <Link
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icons-3 "
                      aria-label={social.name}>
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
              <form
                onSubmit={(e) => handleSubmit(e, showMessage)}
                className="flex flex-col w-full gap-[1rem]"
                accept-charset="UTF-8"
                encType="multipart/form-data"
                method="POST">
                <Scroll className="box-1">
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    className="input"
                    placeholder="First name"
                    value={formValues.fname}
                    onChange={handleChange}
                    pattern="[A-Za-zÀ-ÿ\s]+"
                    required
                  />

                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    className="input"
                    placeholder="Last name"
                    value={formValues.lname}
                    onChange={handleChange}
                    pattern="[A-Za-zÀ-ÿ\s]+"
                    required
                  />
                </Scroll>

                <Scroll className="box-2">
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="input"
                    placeholder="Company Name"
                    value={formValues.companyName}
                    onChange={handleChange}
                    pattern="^\w[\w.\-#&\s]*$"
                  />
                </Scroll>
                <Scroll className="box-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    placeholder="Email address"
                    value={formValues.email}
                    onChange={handleChange}
                    pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
                    required
                  />
                </Scroll>
                <Scroll className="box-2">
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="input"
                    placeholder="Phone number"
                    value={formValues.phoneNumber}
                    onChange={handleChange}
                    pattern="^(\+|\d)[0-9]{7,16}$"
                    required
                  />
                </Scroll>
                <Scroll className="box-2">
                  <select
                    id="service"
                    name="service"
                    className="input"
                    value={formValues.service}
                    onChange={handleChange}
                    aria-label="service select state"
                    required>
                    <option value="">Select a service</option>
                    <option value="AI Model Training">AI Model Training</option>
                    <option value="Data Preprocessing">
                      Data Preprocessing
                    </option>
                    <option value="Model Evaluation">Model Evaluation</option>
                    <option value="Real-Time Predictions">
                      Real-Time Predictions
                    </option>
                    <option value="Automated Data Labeling">
                      Automated Data Labeling
                    </option>
                    <option value="AI-Powered Analytics">
                      AI-Powered Analytics
                    </option>
                    <option value="Custom AI Solutions">
                      Custom AI Solutions
                    </option>
                    <option value="AI Consultation">AI Consultation</option>
                    <option value="Machine Learning Integration">
                      Machine Learning Integration
                    </option>
                    <option value="Predictive Maintenance">
                      Predictive Maintenance
                    </option>
                    <option value="others">Other Services</option>
                  </select>
                </Scroll>
                <Scroll>
                  <textarea
                    id="description"
                    name="description"
                    className="input"
                    placeholder="Message"
                    value={formValues.description}
                    onChange={handleChange}
                    required></textarea>
                </Scroll>
                <Scroll>
                  {errors.fname && (
                    <span className="text-red-500">{errors.fname}</span>
                  )}

                  {errors.lname && (
                    <span className="text-red-500">{errors.lname}</span>
                  )}

                  {errors.email && (
                    <span className="text-red-500">{errors.email}</span>
                  )}

                  {errors.phoneNumber && (
                    <span className="text-red-500">{errors.phoneNumber}</span>
                  )}
                </Scroll>

                <Scroll className="box-3">
                  <input type="checkbox" id="terms" name="terms" />
                  <label
                    htmlFor="terms"
                    className="text-primary flex gap-1 flex-wrap ">
                    I agree to the
                    <Link
                      href="/Terms-and-conditions"
                      className="link-2"
                      target="_blank"
                      aria-label={"terms of use"}>
                      terms of use
                    </Link>
                    and
                    <Link
                      href="/privacy-policy"
                      className="link-2"
                      target="_blank"
                      aria-label={"privacy policy"}>
                      privacy policy
                    </Link>
                  </label>
                </Scroll>
                <div className="flex items-center gap-3">
                  <button type="submit" className="btn btn-1" title="submitbtn">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn-2"
                    title="resetbtn">
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* {open && (
        <Notifications
          message={message}
          handleClose={handleClose}
          title="Contact Form"
          time={time}
        />
      )} */}
    </>
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
