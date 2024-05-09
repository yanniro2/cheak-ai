"use client";
import React, { useState, useEffect } from "react";

const Typing: React.FC = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120); // Typing speed in milliseconds

  useEffect(() => {
    const phrases = [
      "AI Data Analysis",
      "Machine Learning",
      "Fraud Detection",
      "ML/AI Research",
    ]; // Move inside useEffect
    const phrase = phrases[currentPhraseIndex];
    let currentCharacterIndex = isDeleting ? phrase.length : 0;

    const typingInterval = setInterval(() => {
      if (isDeleting) {
        setCurrentPhrase(phrase.substring(0, currentCharacterIndex));
        currentCharacterIndex--;
      } else {
        setCurrentPhrase(phrase.substring(0, currentCharacterIndex));
        currentCharacterIndex++;
      }

      if (isDeleting && currentCharacterIndex === 0) {
        setIsDeleting(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      } else if (!isDeleting && currentCharacterIndex === phrase.length + 1) {
        setIsDeleting(true);
        setTypingSpeed(120); // Delay before starting to delete the text
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [currentPhraseIndex, isDeleting, typingSpeed]);

  return (
    <>
      {currentPhrase}
      <span className="font-light">|</span>
    </>
  );
};

export default Typing;
