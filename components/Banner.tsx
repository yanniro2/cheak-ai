import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="w-full  bg-primary ">
      <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between p-[3rem] rounded gap-[3rem]">
        <div className="lg:w-1/2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.018515254454!2d-80.31948972463681!3d26.065651295978977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a7a16ba8d2ed%3A0x1c4f36f25f47d196!2sParking%20lot%2C%2012555%20Orange%20Dr%2C%20Davie%2C%20FL%2033330%2C%20USA!5e0!3m2!1sen!2sca!4v1718375672721!5m2!1sen!2sca"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded overflow-hidden w-full h-[20rem] lg:h-[60vh]"
            referrerPolicy="no-referrer-when-downgrade"
            title="location map"></iframe>
        </div>
        <div className="lg:w-1/2 lg:pl-[3rem] flex flex-col gap-[1rem]">
          <div>
            <div className="font-semibold uppercase text-[2rem] font-poppins tracking-tighter ">
              Check AI
            </div>
            <p className=" text-gray font-light">
              Reap the Benefits of using the latest Artificial Intelligence
              Technologies. Our solutions are designed to help you streamline
              operations, enhance decision-making, and drive innovation.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="icons-1">
              <FaMapMarkerAlt />
            </div>
            <div className="font-poppins font-semibold">
              12555 Orange Dr, Davie, FL 33330, USA
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="icons-1">
              <FaPhoneAlt />
            </div>
            <div className="font-poppins font-semibold">+1 954-998-1219</div>
          </div>
          <div className="flex items-center gap-3">
            <div className="icons-1">
              <FaEnvelope />
            </div>
            <div className="font-poppins font-semibold">info@check-ai.com</div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              target="_blank"
              className="btn hover:bg-white text-white shadow-md hover:shadow-primary w-full md:w-fit bg-lighDark transition-all hover:text-primary"
              aria-label={"call back"}>
              request a call back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
