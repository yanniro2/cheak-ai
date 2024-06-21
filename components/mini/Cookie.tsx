"use client";
import React, { useState, useEffect } from "react";



const Cookie = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[3000] w-full bg-primary">
      <div className="container mx-auto p-4 rounded flex flex-col justify-between gap-4">
        <p className="text-stone-300">
          This website uses cookies to provide the best possible user
          experience. By accepting, you consent to cookies being used. If you
          want to find out more or disable cookies, please visit our cookies
          page.
        </p>
        {showSettings && (
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold font-poppins uppercase text-white">
              Cookie Settings
            </h3>
            <div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="necessary-cookies" />
                <label
                  htmlFor="necessary-cookies"
                  className="text-white capitalize font-semibold">
                  Necessary cookies
                </label>
              </div>
              <p className="text-lighDark">
                These cookies are essential for the site to work and provide you
                with a better user experience.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="marketing-cookies" />
                <label
                  htmlFor="marketing-cookies"
                  className="text-white capitalize font-semibold">
                  Marketing
                </label>
              </div>
              <p className="text-lighDark">
                We use YouTube to show videos on our website and the video
                player places cookies on your computer.
              </p>
            </div>
          </div>
        )}

        <div className="flex items-center gap-4">
          <button
            className="btn btn-3"
            onClick={handleSettings}
            title="cookiebtn">
            Cookie Settings
          </button>
          <button
            className="btn btn-4"
            onClick={handleAccept}
            title="cookieAccpetbtn">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookie;
