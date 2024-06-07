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
import Notifications from "@/components/mini/Notifications";

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
  const [open, setOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>("");
  const [submissionCount, setSubmissionCount] = useState<number>(0);
  const [time, setTime] = useState<number>(5);

  const handleOpen = (message: string | null) => {
    setOpen(true);
    setMessage(message);
    let timeLeft = 10; // Time in seconds
    const timer = setInterval(() => {
      timeLeft -= 1;
      if (timeLeft <= 0) {
        clearInterval(timer);
        handleClose();
      }
      setTime(() => timeLeft);
    }, 1000); // Update every second
  };

  const handleClose = () => {
    setOpen((open) => false);
  };

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the entire form
    const newErrors: { [key: string]: string } = {};
    Object.entries(formValues).forEach(([fieldName, fieldValue]) => {
      let errorMessage = "";
      switch (fieldName) {
        case "fname":
          errorMessage =
            fieldValue.trim() === "" ? "FirstName is required" : "";
          break;
        case "lname":
          errorMessage = fieldValue.trim() === "" ? "LastName is required" : "";
          break;
        case "email":
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          errorMessage = emailRegex.test(fieldValue)
            ? ""
            : "Please enter a valid email address";
          break;
        case "phoneNumber":
          const phoneRegex =
            /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g;
          errorMessage = phoneRegex.test(fieldValue)
            ? ""
            : "Please enter a valid phone number";
          break;
        default:
          break;
      }
      newErrors[fieldName] = errorMessage;
    });

    // Update the error state
    setErrors(newErrors);

    // Submit the form if there are no errors
    if (Object.values(newErrors).every((error) => error === "")) {
      console.log("Form submitted:", formValues);
      try {
        const response = await fetch("/api/contactUs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formValues }),
        });
        const data = await response.json();
        if (response.ok) {
          handleOpen(data.msg);
          setFormValues({
            fname: "",
            lname: "",
            companyName: "",
            email: "",
            phoneNumber: "",
            description: "",
            service: "",
          });
        } else {
          handleOpen(data.msg);
        }
      } catch (error) {
        handleOpen("An error occurred. Please try again later.");
      } finally {
        // setLoading(false);
      }
      // Reset form after submission
    }
  };

  return (
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
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-full gap-[1rem]">
              <Scroll className="box-1">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  className="input"
                  placeholder="First name"
                  defaultValue={formValues.fname}
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
                  defaultValue={formValues.lname}
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
                  defaultValue={formValues.companyName}
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
                  defaultValue={formValues.email}
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
                  defaultValue={formValues.phoneNumber}
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
                  defaultValue={formValues.service}
                  onChange={handleChange}
                  required>
                  <option value="">Select a service</option>
                  <option value="AI Model Training">AI Model Training</option>
                  <option value="Data Preprocessing">Data Preprocessing</option>
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
                  <span className="text-red-500">{errors.lname}</span>
                )}

                {errors.phoneNumber && (
                  <span className="text-red-500">{errors.lname}</span>
                )}
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
              <button type="submit" className="btn btn-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {open && (
        <Notifications
          message={message}
          handleClose={handleClose}
          title="Contact Form"
          time={time}
        />
      )}
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
