import React from "react";
import Title1 from "./mini/Title";
import Link from "next/link";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section
      className="w-screen h-full flex flex-col items-center justify-center drop-shadow shadow"
      id="contact">
      <div className="container mx-auto p-5 flex items-center h-full flex-col gap-[1rem] py-[4rem] ">
        <Title1 title={"Contact Us"} subtitle={"Get in Touch"} />
        <div className="w-full h-full flex items-center justify-between gap-[3rem] ">
          <div className="w-1/2  flex flex-col  rounded gap-[1rem]">
            <h2>Contact Details</h2>
            <p>Address: 123 Main Street, City, Country</p>
            <p>Phone: +1234567890</p>
            <p>Email: example@example.com</p>
          </div>
          <div className="w-1/2  items-start  flex flex-col justify-between gap-[1rem]">
            <h2 className="text-[2rem] font-poppins font-semibold uppercase">
              Add your details
            </h2>
            <form className="flex flex-col w-full gap-[1rem]">
              <div className="box-1">
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
              </div>
              <div className="box-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder="Email address"
                />
              </div>
              <div className="box-2">
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="input"
                  placeholder="Phone number"
                />
              </div>
              <div className="box-2">
                <select id="services" name="services" className="input">
                  <option value="">Select a service</option>
                  <option value="Service 1">Service 1</option>
                  <option value="Service 2">Service 2</option>
                  <option value="Service 3">Service 3</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <textarea
                id="message"
                name="message"
                className="input"
                placeholder="Message"></textarea>

              <div className="box-1">
                <input type="checkbox" id="terms" name="terms" />
                <label htmlFor="terms" className="text-primary flex gap-1">
                  I agree to the{" "}
                  <Link href="/" className="link-2">
                    terms of use
                  </Link>
                  and
                  <Link href="/" className="link-2">
                    privacy policy
                  </Link>
                </label>
              </div>

              <div className="box-2 input">I&rsquo;m not robot</div>

              <button type="submit" className="btn btn-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
